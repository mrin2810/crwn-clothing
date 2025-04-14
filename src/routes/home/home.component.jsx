import Directory from "../../components/directory/directory.components";
import { categories } from "../../data/categories";

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
