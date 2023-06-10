import React from 'react';

/*
 * General Button component.
 */
const Button = ({ children, buttonClickHandler }) => (
  <button onClick={buttonClickHandler}>{children}</button>
);

export default Button;
