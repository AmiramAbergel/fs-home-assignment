import { css } from "@emotion/react";

export const backdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const modal = css`
  position: fixed;
  top: 14vh;
  left: 5%;
  width: 78%;
  height: auto;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
  }
`;
