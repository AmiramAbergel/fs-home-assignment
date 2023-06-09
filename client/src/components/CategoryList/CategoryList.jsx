/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import Modal from "../UI/Modal/Modal.jsx";

import { ImageContext } from "../../hooks/ImageContext.js";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice.js";
import { categoryItem, categoryList } from "./CategoryList.style.js";
import Category from "./Category/Category.jsx";

const CATEGORIES = [
  {
    id: "c1",
    title: "backgrounds",
  },
  {
    id: "c2",
    title: "fashion",
  },
  {
    id: "c3",
    title: "nature",
  },
  {
    id: "c4",
    title: "science",
  },
  {
    id: "c5",
    title: "education",
  },
  {
    id: "c6",
    title: "feelings",
  },
  {
    id: "c7",
    title: "health",
  },
  {
    id: "c8",
    title: "people",
  },
  {
    id: "c9",
    title: "religion",
  },
  {
    id: "c10",
    title: "places",
  },
  {
    id: "c11",
    title: "animals",
  },
  {
    id: "c12",
    title: "industry",
  },
  {
    id: "c13",
    title: "computer",
  },
  {
    id: "c14",
    title: "food",
  },
  {
    id: "c15",
    title: "sports",
  },
  {
    id: "c16",
    title: "transportation",
  },
  {
    id: "c17",
    title: "travel",
  },
  {
    id: "c18",
    title: "buildings",
  },
  {
    id: "c19",
    title: "business",
  },
  {
    id: "c20",
    title: "music",
  },
];

const CategoryList = (props) => {
  const { setSelectedCategory } = useContext(ImageContext);
  const dispatch = useDispatch();

  const handleCategorySelect = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    dispatch(uiActions.toggle()); // close the modal
  };

  return (
    <Modal>
      <h2>Choose Category</h2>
      <ul css={categoryList}>
        {CATEGORIES.map((category) => (
          <li css={categoryItem} key={category.id}>
            <Category
              item={category.title}
              onCategorySelect={handleCategorySelect}
            />
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default CategoryList;
