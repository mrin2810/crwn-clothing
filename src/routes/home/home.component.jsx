import CategoryMenu from "../../components/category-menu/category-menu.components";
import { categories } from "../../data/categories";

const Home = () => {
  return <CategoryMenu categories={categories} />;
};

export default Home;
