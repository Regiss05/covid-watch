/* eslint-disable import/extensions */
// @ts-nocheck
import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Pages/Home';
import Header from './components/Header/Header';
import AuthContext from './redux/auth-context';
import classes from './App.module.css';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <div className={classes.mainContent}>
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && (
        <>
          {' '}
          <Header />
          {' '}
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
