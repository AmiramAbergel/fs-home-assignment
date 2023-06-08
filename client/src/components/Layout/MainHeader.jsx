/** @jsxImportSource @emotion/react */
import { header, navbar } from './MainHeader.style';

const MainHeader = (props) => {
  return (
    <header css={header}>
      <h1>Header</h1>
      <nav css={navbar}>
        <ul>
          <li>Next</li>
          <li>Prev</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
