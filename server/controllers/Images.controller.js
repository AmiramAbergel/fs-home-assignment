import axios from 'axios';

export const getImages = async (req, res) => {
  const category = req.query.category;
  const BASE_URL = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`;
  try {
    const response = await axios.get(BASE_URL);
    res.status(200).json({
      status: 'success',
      data: response.data
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error
    });
  }
};
