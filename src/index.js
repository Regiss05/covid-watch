import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './redux/auth-context';
import store from './redux/configureStore';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
