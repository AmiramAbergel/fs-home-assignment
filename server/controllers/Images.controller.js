import axios from 'axios';
import { sortByDate, sortById } from '../utils/sortImages.js';

export const getImages = async (req, res) => {
  const category = req.query.category;
  const page = req.query.page || 1;
  const perPage = req.query.perPage || 9;
  const sort = req.query.sort;

  const BASE_URL = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(BASE_URL);
    let data = response.data.hits;

    if (sort === 'id') {
      data.sort(sortById);
    } else if (sort === 'date') {
      data.sort(sortByDate);
    }

    res.status(200).json({
      status: 'success',
      data: data
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error
    });
  }
};
