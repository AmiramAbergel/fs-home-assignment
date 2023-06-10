import { css } from '@emotion/react';

export const header = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 0.1em;
  line-height: 1.5em;
`;

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 60%;
  justify-items: center;
`;
