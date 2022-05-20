import { getAPIData, getCountryAPIData } from './dataAPI';

const LOAD_CONTINENT_DATA = 'covidWatch/countries/LOAD_CONTINENT_DATA';
const LOAD_COUNTRY = 'covidWatch/countries/LOAD_COUNTRY';

const initialState = [];

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_CONTINENT_DATA:
      return [...state, ...payload.countries];
    case LOAD_COUNTRY:
      return [...state, ...payload.country];
    default:
      return state;
  }
}

export const continentData = (countries) => ({
  type: LOAD_CONTINENT_DATA,
  payload: {
    countries,
  },
});

export const loadContinentData = () => async (dispatch) => {
  // @ts-ignore
  const apiData = await getAPIData();
  const countries = Object.values(apiData);

  dispatch(continentData(countries));
};

export const countryVaccineData = (country) => ({
  type: LOAD_CONTINENT_DATA,
  payload: {
    country,
  },
});

export const loadCountryData = (countryName) => async (dispatch) => {
  const countryAPIData = await getCountryAPIData(countryName);
  const countryData = Object.values(countryAPIData)[0];
  dispatch(countryVaccineData(countryData));
};
