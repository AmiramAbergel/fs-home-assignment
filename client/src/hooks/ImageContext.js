import React, { createContext, useState, useEffect } from 'react';
import { clientApi } from '../api/api.js';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('animals'); // Default category
  const [currentPage, setCurrentPage] = useState(1); // Track the current page number

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await clientApi(selectedCategory, currentPage); // Fetch images from API
        setImages(response.data.hits);
      } catch (error) {
        console.error('Failed to fetch images', error);
      }
    };

    fetchImages();
  }, [selectedCategory, currentPage]);

  return (
    <ImageContext.Provider
      value={{
        images,
        selectedCategory,
        setSelectedCategory,
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
