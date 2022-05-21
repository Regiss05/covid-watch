import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadContinentData } from '../../redux/countries/countries';
import CountryCard from './CountryCard';
import classes from './CountriesList.module.css';

function CountriesList({ searchValue = '' }) {
  // @ts-ignore
  const { countries } = useSelector((state) => state.countries);
  const [filteredCountries, setfilteredCountries] = useState(countries);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    if (!countries.length) dispatch(loadContinentData());
  }, []);

  useEffect(() => {
    setfilteredCountries(countries);
  }, [countries]);

  useEffect(() => {
    const searchVal = searchValue.toLowerCase().trim();
    setfilteredCountries(
      countries.filter((country) => {
        const countryName = country.name.toLowerCase();
        return countryName.includes(searchVal);
      }),
    );
  }, [searchValue]);

  return (
    <div className={classes.countryWrapper}>
      {filteredCountries.map((countryData) => (
        <CountryCard
          key={countryData.country}
          country={countryData}
        />
      ))}
    </div>
  );
}
CountriesList.propTypes = {
  searchValue: PropTypes.string.isRequired,
};

export default CountriesList;
