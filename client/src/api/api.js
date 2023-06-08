import axios from "axios";

const CATEGORY = "nature";
const BASE_URL = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${CATEGORY}`;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
