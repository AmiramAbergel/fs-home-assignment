/** @jsxImportSource @emotion/react */
import React from 'react';
import { button } from './Button.style.js';

/*
 * General Button component.
 */
const Button = ({ children, onClick }) => (
  <button css={button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
