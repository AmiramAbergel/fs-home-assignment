import { css } from "@emotion/react";

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

export const spinner = css`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #3498db;
    border-color: #3498db transparent #3498db transparent;
    animation: spinner 1.2s linear infinite;

    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
