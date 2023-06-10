/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import CategoryButton from '../CategoryList/CategoryButton';
import Button from '../UI/Button/Button.jsx';
import { header, logo, navbar, selectBox } from './MainHeader.style';
import { ImageContext } from '../../hooks/ImageContext.js';

const MainHeader = (props) => {
  const { currentPage, setCurrentPage, setSortOption } =
    useContext(ImageContext);

  const prevClickHandler = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const nextClickHandler = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
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
      <header css={header}>
        <h1 css={logo}>Pixabay</h1>
        <h3>Page: {currentPage}</h3>
        <span>
          <select
            css={selectBox}
            onChange={(event) => setSortOption(event.target.value)}
          >
            <option value=''>Sort by</option>
            <option value='id'>ID</option>
            <option value='date'>Date</option>
          </select>
        </span>
      </header>
    </>
  );
};

export default MainHeader;
