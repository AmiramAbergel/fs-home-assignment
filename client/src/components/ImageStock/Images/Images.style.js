import { css } from "@emotion/react";

export const card = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
  width: 300px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  ul {
    display: flex;
    list-style-type: none;
    padding: 0;

    li {
      padding: 50px 0;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;

    ul li {
      padding: 20px 0;
      font-size: 1rem;
    }
  }
`;
