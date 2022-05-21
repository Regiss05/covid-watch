import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import CountriesReducer from './countries/countries';

const rootReducer = combineReducers({
  countries: CountriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
