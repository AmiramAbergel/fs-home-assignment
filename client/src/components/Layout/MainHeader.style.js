import { css } from '@emotion/react';

export const header = css`
  width: 100%;
  height: 5rem;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #252424;
  color: #fff;
  font-size: 1.5rem;
`;

export const logo = css`
  width: 5%;
`;

export const navbar = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
  background-color: #252424;

  & ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
  }

  & li {
    margin: 0 7rem;
  }
`;

export const selectBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #252424;
  background-color: #fff;
  padding: 0 10px;
`;
