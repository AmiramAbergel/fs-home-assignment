import axios from "axios";

export async function clientApi(category, sortOption, page, perPage = 9) {
  const BASE_URL = `https://fs-home-assignment.onrender.com/api/v1/images?category=${category}&sort=${sortOption}&page=${page}&perPage=${perPage}`;

  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
