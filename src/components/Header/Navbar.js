/* eslint-disable react/button-has-type */
// @ts-nocheck
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import AuthContext from '../../redux/auth-context';

import classes from './Navbar.module.css';

const Navbar = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      {ctx.isLoggedIn && (
        <Nav defaultActiveKey="/home" className={classes.nav} as="ul">
          <Nav.Item as="li">
            <span>Search</span>
          </Nav.Item>
          <Nav.Item as="li">
            <FontAwesomeIcon
              icon={faMicrophone}
              className={`${classes.faIcon} ${classes.microphone}`}
            />
          </Nav.Item>
          <Nav.Item as="li">
            <FontAwesomeIcon
              icon={faGear}
              className={`${classes.faIcon} ${classes.gear}`}
            />
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">
              {' '}
              <button onClick={ctx.onLogout}>Logout</button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      )}
    </>
    // <nav className={classes.nav}>
    //   <ul>
    //     {ctx.isLoggedIn && <span>Search</span>}
    //     {ctx.isLoggedIn && (
    //       <li>
    //         <button onClick={ctx.onLogout}>Logout</button>
    //       </li>
    //     )}
    //   </ul>
    // </nav>
  );
};

export default Navbar;
