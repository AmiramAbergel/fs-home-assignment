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

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
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

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    width: 90%;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    width: 100%;
  }
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

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;

    &:after {
      width: 48px;
      height: 48px;
    }
  }
`;
