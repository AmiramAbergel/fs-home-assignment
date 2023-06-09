import { css } from '@emotion/react';

export const categoryList = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  list-style: none;
`;

export const categoryItem = css`
  flex: 0 0 auto;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #eee;
  }
`;
