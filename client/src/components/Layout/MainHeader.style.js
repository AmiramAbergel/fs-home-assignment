import { css } from "@emotion/react";

export const header = css`
  width: 100%;
  height: 5rem;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #252424;
  color: #fff;
`;

export const navbar = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  color: #fff;

  & ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;

  }
`;