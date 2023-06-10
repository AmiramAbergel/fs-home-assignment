/** @jsxImportSource @emotion/react */
import { card } from './Image.style.js';
import ImageCard from './ImageCard.jsx';

const Images = ({ images }) => {
  const firstNineImages = images.slice(0, 9);
  return (
    <>
      {firstNineImages.map((image) => (
        <div css={card} key={image.id}>
          <ImageCard image={image} />
        </div>
      ))}
    </>
  );
};

export default Images;
