/* eslint-disable no-undef */
const URL = 'https://covid-api.mmediagroup.fr/v1/vaccines?continent=africa';

const getAPIData = async () => {
  const res = await fetch(URL);
  const countries = await res.json();
  return countries;
};

const getCountryAPIData = async (countryName) => {
  // @ts-ignore
  const res = await fetch(`${URL}?country=${countryName}`);
  const countryData = await res.json();
  return countryData;
};

export { getAPIData, getCountryAPIData };
