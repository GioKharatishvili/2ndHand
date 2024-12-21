import CurrentItems from "./CurrentItems";
import { getProducts } from "../services/api/products";
import AdminProductCard from "./AdminProductCard";

const CurrentProducts = () => {
  return (
    <CurrentItems 
      fetchItems={getProducts} 
      ItemComponent={AdminProductCard} 
      emptyMessage="No Products Currently" 
    />
  );
};

export default CurrentProducts;
