import { useSelector } from "react-redux";
import AdminProductCard from "./AdminProductCard";
import { addNewProduct, addMultipleProducts } from "../services/api/products";
import AddItem from "./AddItem";
import { removeProduct } from "../store/products/productsSlice";

const AddProduct = () => {
  const products = useSelector((state) => state.products.list);

  return (
    <AddItem
      itemType="Product"
      items={products}
      ItemCard={AdminProductCard}
      addNewItem={addNewProduct}
      addMultipleItems={addMultipleProducts}
      createItemPath="/createProduct"
      removeItem={removeProduct}
    />
  );
};

export default AddProduct;
