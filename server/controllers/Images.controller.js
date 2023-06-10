import { getImagesFromAPI } from "../services/images.service.js";
import { sortByDate, sortById } from "../utils/sortImages.js";

export const getImages = async (req, res) => {
  const category = req.query.category;
  const page = req.query.page || 1;
  const perPage = req.query.perPage || 9;
  const sort = req.query.sort;

  if (!category) {
    return res.status(400).json({
      status: "fail",
      message: "Category is required",
    });
  }

  try {
    const data = await getImagesFromAPI(category, page, perPage);
    let sortedData = data;

    if (sort === "id") {
      sortedData = data.sort(sortById);
    } else if (sort === "date") {
      sortedData = data.sort(sortByDate);
    }

    res.status(200).json({
      status: "success",
      data: sortedData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
