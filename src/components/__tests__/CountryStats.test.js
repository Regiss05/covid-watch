import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import CountryStats from '../Pages/CountryStats';
import store from '../../redux/configureStore';

describe('Country Stats tests', () => {
  test('should render Country Stats component', () => {
    const detailsPage = render(
      <Provider store={store}>
        <BrowserRouter>
          <CountryStats />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(detailsPage).toMatchSnapshot();
  });
});
