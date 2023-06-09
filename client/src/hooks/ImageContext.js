import React, { createContext, useState, useEffect } from 'react';
import { clientApi } from '../api/api.js';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('animals'); // Default category

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await clientApi(selectedCategory); // Fetch images from API
        setImages(response.data.hits);
      } catch (error) {
        console.error('Failed to fetch images', error);
      }
    };

    fetchImages();
  }, [selectedCategory]);

  return (
    <ImageContext.Provider
      value={{
        images,
        selectedCategory,
        setSelectedCategory
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
