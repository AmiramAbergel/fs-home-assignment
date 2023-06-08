import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice.js';
const CategoryButton = (props) => {
  const dispatch = useDispatch();

  const toggleCategoryHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button onClick={toggleCategoryHandler}>
      <span>Category</span>
    </button>
  );
};

export default CategoryButton;
