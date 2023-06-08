/** @jsxImportSource @emotion/react */
import CategoryButton from '../CategoryList/CategoryButton';
import { header, navbar } from './MainHeader.style';

const MainHeader = (props) => {
  return (
    <header css={header}>
      <h1>Logo</h1>
      <nav css={navbar}>
        <ul>
          <li>Next</li>
          <li>
            <CategoryButton />
          </li>
          <li>Prev</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
