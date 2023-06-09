import { useContext } from 'react';
import Images from '../components/ImageStock/Images.jsx';
import { ImageContext } from '../hooks/ImageContext.js';

const HomePage = () => {
  const { images } = useContext(ImageContext);
  return (
    <div>
      <h1>Home Page</h1>
      <Images images={images} />
    </div>
  );
};

export default HomePage;
