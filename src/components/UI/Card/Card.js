/* eslint-disable react/prop-types */
import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  const { className, children } = props;
  return (
    <div className={`${classes.card} ${className}`}>{children}</div>
  );
};

export default Card;
