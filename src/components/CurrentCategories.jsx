import CurrentItems from "./CurrentItems";
import { getCategories } from "../services/api/categories";
import CategoryCard from "./CategoryCard";

const CurrentCategories = () => {
  return (
    <CurrentItems 
      fetchItems={getCategories} 
      ItemComponent={CategoryCard} 
      emptyMessage="No Categories Currently" 
    />
  );
};

export default CurrentCategories;
