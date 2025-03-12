import "./categories.styles.scss";
import CategoryMenu from "./components/category-menu/category-menu.components";
import { categories } from "./data/categories";

const App = () => {
  return <CategoryMenu categories={categories} />;
};

export default App;
