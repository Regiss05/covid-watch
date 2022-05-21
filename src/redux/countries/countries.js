import { getCountryAPIData } from '../../utils/dataAPI';

const LOAD_CONTINENT_DATA = 'covidWatch/countries/LOAD_CONTINENT_DATA';
const LOAD_COUNTRY_DATA = 'covidWatch/countries/LOAD_COUNTRY_DATA';

const initialState = {
  countries: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONTINENT_DATA:
      return { countries: action.payload.countries };
    case LOAD_COUNTRY_DATA:
      return {
        ...state,
        country: action.payload,
      };
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

export const loadContinentData = () => (dispatch) => {
  const API_URL = 'https://covid-api.mmediagroup.fr/v1/vaccines?continent=africa';

  return fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
      const countries = [];
      const countriesData = Object.values(res);
      countriesData.forEach((country) => {
        countries.push({
          name: country.All.country,
          total: country.All.administered,
          full_vacinated: country.All.people_vaccinated,
          partial_vaccinated: country.All.people_partially_vaccinated,
        });
      });
      dispatch(continentData(countries));
    });
};

export const countryVaccineData = (country) => ({
  type: LOAD_COUNTRY_DATA,
  payload: country,
});

export const loadCountryData = (country) => async (dispatch) => {
  const countryAPIData = await getCountryAPIData(country);
  const countryData = countryAPIData;
  dispatch(countryVaccineData(countryData));
};
