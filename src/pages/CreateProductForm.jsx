import ProductForm from "../components/ProductForm";

const CreateProductForm = () => {
  const initialForm = {
    title: "",
    category_name: "",
    description: "",
    image: "",
    salePrice: 0,
    price: 0,
  };
  return <ProductForm initialForm={initialForm} mode="create" />;
};
export default CreateProductForm;
