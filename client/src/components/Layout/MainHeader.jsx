/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import CategoryButton from '../CategoryList/CategoryButton';
import Button from '../UI/Button/Button.jsx';
import { header, navbar } from './MainHeader.style';
import { ImageContext } from '../../hooks/ImageContext.js';

const MainHeader = (props) => {
  const { setCurrentPage } = useContext(ImageContext);

  const prevClickHandler = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const nextClickHandler = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <header css={header}>
      <h1>Logo</h1>
      <nav css={navbar}>
        <ul>
          <li>
            <Button onClick={prevClickHandler}>Prev</Button>
          </li>
          <li>
            <CategoryButton />
          </li>
          <li>
            <Button onClick={nextClickHandler}>Next</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
