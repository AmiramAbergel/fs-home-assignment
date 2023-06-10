import axios from "axios";

export const getImagesFromAPI = async (category, page, perPage) => {
  const BASE_URL = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(BASE_URL);
    return response.data.hits;
  } catch (error) {
    throw new Error("An error occurred while fetching images");
  }
};
