import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './redux/auth-context';
import store from './redux/configureStore';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

render(
  <AuthContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthContextProvider>,
  rootElement,
);
