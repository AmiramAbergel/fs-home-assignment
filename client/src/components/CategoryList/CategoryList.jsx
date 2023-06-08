import Modal from '../UI/Modal/Modal.jsx';
import Category from './Category.jsx';

const CategoryList = (props) => {
  return (
    <Modal>
      <h2>Choose CategoryList</h2>
      <ul>
        <Category item={{ title: 'Test Image' }}></Category>
      </ul>
    </Modal>
  );
};

export default CategoryList;
