import { css } from '@emotion/react';

export const parameterList = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  li strong {
    margin: 1.5rem;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1.3em;

    &:hover {
      background-color: #eee;
    }
  }
`;
