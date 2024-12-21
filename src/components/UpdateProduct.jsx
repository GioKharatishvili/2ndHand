import ProductForm from "./ProductForm";

const UpdateProduct = () => {
  const initialForm = {
    id: "",
    title: "",
    category_name: "",
    description: "",
    image: "",
    salePrice: 0,
    price: 0,
  };
  return <ProductForm initialForm={initialForm} mode="update" />;
};
export default UpdateProduct;
