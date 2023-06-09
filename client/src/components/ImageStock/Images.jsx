/** @jsxImportSource @emotion/react */
import { card } from './Image.style.js';
import ImageCard from './ImageCard.jsx';

const Images = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <div css={card} key={image.id}>
          <ImageCard image={image} />
        </div>
      ))}
    </>
  );
};

export default Images;
