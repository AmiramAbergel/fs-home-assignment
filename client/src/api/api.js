import axios from 'axios';

const BASE_URL =
  'https://fs-home-assignment.onrender.com/api/v1/images?category=';

export async function clientApi(category) {
  try {
    const response = await axios.get(BASE_URL + category);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
