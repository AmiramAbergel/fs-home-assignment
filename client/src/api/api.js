import axios from 'axios';

const CATEGORY = 'nature';
const BASE_URL = `https://fs-home-assignment.onrender.com/api/v1/${CATEGORY}`;

const api = axios.create({
  baseURL: BASE_URL
});

export default api;
