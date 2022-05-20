import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import Navbar from './Navbar';
// @ts-ignore
import classes from './Header.module.css';

const Header = () => (
  <header className={classes['main-header']}>
    <div className={classes.homeIcon}>
      {' '}
      <FontAwesomeIcon icon={faHouse} className={`${classes.faIcon}`} />
    </div>
    <Navbar />
  </header>
);

export default Header;
