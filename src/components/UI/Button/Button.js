/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import classes from './Button.module.css';

const Button = (props) => (
  <button
    type={props.type || 'button'}
    className={`${props.className} ${classes.button}`}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default Button;
