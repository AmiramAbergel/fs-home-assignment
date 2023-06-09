import { imageActions } from '../../store/image-slice.js';
import ImageParameter from './ImageParameter.jsx';
import { useDispatch, useSelector } from 'react-redux';

const ImageCard = ({ image }) => {
  const selectedImage = useSelector((state) => state.image.selectedImage);
  const dispatch = useDispatch();

  const toggleImageHandler = () => {
    !selectedImage && dispatch(imageActions.selectImage(image));
  };

  return (
    <div onClick={toggleImageHandler}>
      <img src={image.webformatURL} alt='' />
      {selectedImage === image && <ImageParameter image={image} />}
    </div>
  );
};

export default ImageCard;
