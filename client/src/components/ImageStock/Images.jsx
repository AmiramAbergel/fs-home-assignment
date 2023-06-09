import ImageCard from './ImageCard.jsx';

const Images = ({ images }) => {
  return (
    <div>
      {images &&
        images.map((image, index) => <ImageCard key={index} image={image} />)}
    </div>
  );
};

export default Images;
