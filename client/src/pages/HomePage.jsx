/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useState } from "react";

import { ImageContext } from "../hooks/ImageContext.js";
import { container, grid, header, spinner } from "./HomePage.style.js";
import Images from "../components/ImageStock/Images/Images.jsx";

const HomePage = () => {
  const { images } = useContext(ImageContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (images.length > 0) {
      setIsLoading(false);
    }
  }, [images]);

  return (
    <div css={container}>
      <h1 css={header}>Stunning royalty-free images & royalty-free stock</h1>
      {isLoading ? (
        <div css={spinner}>
          <div>
            <span>Loading...</span>
          </div>
        </div>
      ) : (
        <div css={grid}>
          <Images images={images} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
