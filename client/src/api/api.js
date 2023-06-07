import axios from "axios";

const BASE_URL =
  "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${CATEGORY}";

export default axios.create({
  baseURL: BASE_URL,
});
