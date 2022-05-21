import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import Navbar from './Navbar';
// @ts-ignore
import classes from './Header.module.css';

const Header = () => (
  <header className={classes['main-header']}>
    <div className={classes.homeIcon}>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} className={`${classes.faIcon}`} />
      </Link>
    </div>
    <Navbar />
  </header>
);

export default Header;
