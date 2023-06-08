import { useSelector } from 'react-redux';

import './App.css';
import CategoryList from './components/CategoryList/CategoryList.jsx';
import Images from './components/ImageStock/Images.jsx';
import Layout from './components/Layout/Layout';

function App() {
  const showCategoryList = useSelector((state) => state.ui.categoryIsVisible);

  return (
    <Layout>
      {showCategoryList && <CategoryList />}
      <Images />
    </Layout>
  );
}

export default App;
