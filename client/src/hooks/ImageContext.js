import React, { createContext, useState, useEffect } from 'react';
import { clientApi } from '../api/api.js';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('animals'); // Default category
  const [currentPage, setCurrentPage] = useState(1); // Track the current page number
  const [sortOption, setSortOption] = useState('id');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await clientApi(
          selectedCategory,
          sortOption,
          currentPage
        ); // Fetch images from API
        setImages(response.data.hits);
      } catch (error) {
        console.error('Failed to fetch images', error);
      }
    };

    fetchImages();
  }, [selectedCategory, currentPage, sortOption]);

  return (
    <ImageContext.Provider
      value={{
        images,
        selectedCategory,
        setSelectedCategory,
        currentPage,
        setCurrentPage,
        sortOption,
        setSortOption
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
