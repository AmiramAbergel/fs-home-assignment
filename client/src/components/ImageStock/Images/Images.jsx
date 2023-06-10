/** @jsxImportSource @emotion/react */
import ImageCard from "../Card/ImageCard.jsx";
import { card } from "./Images.style.js";

const Images = ({ images }) => {
  return (
    <>
      {images &&
        images.map((image) => (
          <div css={card} key={image.id}>
            <ImageCard image={image} />
          </div>
        ))}
    </>
  );
};

export default Images;
