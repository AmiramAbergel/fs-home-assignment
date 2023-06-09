/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import Images from '../components/ImageStock/Images.jsx';
import { ImageContext } from '../hooks/ImageContext.js';
import { container, grid, header } from './HomePage.style.js';

const HomePage = () => {
  const { images } = useContext(ImageContext);
  return (
    <div css={container}>
      <h1 css={header}>Home Page</h1>
      <div css={grid}>
        <Images images={images} />
      </div>
    </div>
  );
};

export default HomePage;
