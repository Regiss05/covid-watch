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
        <Nav defaultActiveKey="/" className={classes.nav} as="ul">
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
              <button type="button" onClick={ctx.onLogout}>Logout</button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      )}
    </>
  );
};

export default Navbar;
