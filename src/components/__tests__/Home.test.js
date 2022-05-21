import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Home from '../Pages/Home';
import store from '../../redux/configureStore';

describe('Home tests', () => {
  test('should render Home compponent', () => {
    const homePage = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(homePage).toMatchSnapshot();
  });
});
