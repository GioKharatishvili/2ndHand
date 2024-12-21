import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import { addNewCategory, addMultipleCategories } from "../services/api/categories";
import AddItem from "./AddItem";
import { removeCategory } from "../store/categories/categoriesSlice";

const AddCategory = () => {
  const categories = useSelector((state) => state.categories.list);

  return (
    <AddItem
      itemType="Category"
      items={categories}
      ItemCard={CategoryCard}
      addNewItem={addNewCategory}
      addMultipleItems={addMultipleCategories}
      createItemPath="/createCategory"
      removeItem={removeCategory}
    />
  );
};

export default AddCategory;
