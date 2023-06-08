import { useSelector } from 'react-redux';

import './App.css';
import CategoryList from './components/CategoryList/CategoryList.jsx';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage.jsx';

function App() {
  const showCategoryList = useSelector((state) => state.ui.categoryIsVisible);

  return (
    <Layout>
      {showCategoryList && <CategoryList />}
      <HomePage />
    </Layout>
  );
}

export default App;
