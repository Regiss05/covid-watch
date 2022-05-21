/* eslint-disable no-undef */
const CONTINENT_URL = 'https://covid-api.mmediagroup.fr/v1/vaccines?continent=africa';
const COUNTRY_URL = 'https://covid-api.mmediagroup.fr/v1/vaccines?country';

const getAPIData = async () => {
  const res = await fetch(CONTINENT_URL);
  const countries = await res.json();
  return countries;
};

const getCountryAPIData = async (country) => {
  // @ts-ignore
  const res = await fetch(`${COUNTRY_URL}=${country}`);
  const countryData = await res.json();
  return countryData;
};

export { getAPIData, getCountryAPIData };
