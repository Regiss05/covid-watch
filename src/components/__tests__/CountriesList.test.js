// @ts-nocheck
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import CountriesList from '../Country/CountriesList';
import store from '../../redux/configureStore';

describe('CountriesList test', () => {
  test('should render CountriesList component', () => {
    const data = {
      country: 'Kenya',
      total: 12,
    };
    const countries = render(
      <Provider store={store}>
        <BrowserRouter>
          <CountriesList data={data} searchValue="" />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(countries).toMatchSnapshot();
  });
});
