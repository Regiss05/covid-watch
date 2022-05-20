// @ts-nocheck
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadContinentData } from '../../redux/countries/countries';
import CountryCard from '../Country/CountryCard';
import africaImage from '../../assets/africa.png';
import classes from './Home.module.css';

const Home = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContinentData());
  }, []);

  const totalVacinated = () => {
    let total = 0;
    if (countries) {
      countries.forEach((country) => {
        total += country.All.administered;
      });
    }
    return total.toLocaleString();
  };

  const fullyVacinated = () => {
    let total = 0;
    if (countries) {
      countries.forEach((country) => {
        total += country.All.people_vaccinated;
      });
    }
    return total.toLocaleString();
  };

  const partiallyVacinated = () => {
    let total = 0;
    if (countries) {
      countries.forEach((country) => {
        total += country.All.people_partially_vaccinated;
      });
    }
    return total.toLocaleString();
  };
  return (
    <>
      <section className={classes.homeCallout}>
        <div className={classes.africaImageDiv}>
          <img
            src={africaImage}
            className={classes.africaImage}
            alt="Map of Africa"
          />
        </div>
        <div className={classes.innercontent}>
          <p>
            Total Vaccines Administed across Africa:
            {' '}
            {totalVacinated()}
          </p>
          <p>
            Total People Fully Vaccinated across Africa:
            {' '}
            {fullyVacinated()}
          </p>
          <p>
            Total People Partially Vaccinated across Africa:
            {' '}
            {partiallyVacinated()}
          </p>
        </div>
      </section>
      <section className={classes.dataSection}>
        <h2 className={classes.dataSectionHeader}>Africa&apos;s COVID Vaccine Data</h2>
        <div className={classes.countryWrapper}>
          {countries
            && countries.map((country) => (
              <CountryCard key={country.All.country} country={country} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;
