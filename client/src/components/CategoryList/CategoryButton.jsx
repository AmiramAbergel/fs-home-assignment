import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice.js';
import Button from '../UI/Button/Button.jsx';
const CategoryButton = (props) => {
  const dispatch = useDispatch();

  const toggleCategoryHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <Button onClick={toggleCategoryHandler}>
      <span>Category</span>
    </Button>
  );
};

export default CategoryButton;
