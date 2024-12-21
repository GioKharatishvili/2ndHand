import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../store/products/productsSlice";
import { renderInput } from "../services/utils/utils";
import { getProducts, updateProduct } from "../services/api/products";
import {
  fetchingProductDataSuccessAlert,
  fetchingProductInfoErrorAlert,
  productNotFoundErrorAlert,
} from "../services/alerts/swal";

// Used for CreateProductForm.jsx and UpdateProduct.jsx

const ProductForm = ({ initialForm, mode }) => {
  const [form, setForm] = useState(initialForm);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          const cleanBase64 = base64String.replace(/^data:image\/[a-z]+;base64,/, "");
          setForm((prevForm) => ({ ...prevForm, [name]: cleanBase64 }));
        };
        reader.readAsDataURL(file);
      }

      return;
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "salePrice" || name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "create") {
      dispatch(addProduct(form));
      navigate("../adminPanel");
      return;
    }

    if (mode === "update") {
      await updateProduct(form);
    }
  };

  const handleGetProductClick = async () => {
    try {
      const result = await getProducts();
      const products = result.data.products;
      const product = products.find((p) => p.id === form.id);
      if (product) {
        fetchingProductDataSuccessAlert();
        setForm((prevForm) => ({
          ...prevForm,
          ...product,
        }));

        return;
      }

      productNotFoundErrorAlert();
    } catch (err) {
      fetchingProductInfoErrorAlert();
      console.log(`Error Fetching Product Info: ${err}`);
    }
  };

  return (
    <div className={mode === "create" ? "col-lg-4 col-12 mx-auto m-5 text-center" : "p-4"}>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <h1 className="h3 mb-3 fw-normal">{mode === "create" ? "Create Product" : "Update Product"}</h1>

          {/* type, name, placeholder, label, value, onChange, isRequired, min, disabled */}
          <div className="d-flex gap-2">
            {mode === "update" && renderInput("text", "id", "ID", "ID", form.id, handleChange)}
            {mode === "update" && (
              <button type="button" className="btn btn-primary" onClick={handleGetProductClick}>
                Get
              </button>
            )}
          </div>
          {renderInput("text", "title", "Title", "Title", form.title, handleChange)}
          {renderInput(
            "text",
            "category_name",
            "Category Name",
            "Category Name",
            form.category_name,
            handleChange,
            true,
            0,
            true
          )}
          {renderInput("text", "description", "Description", "Description", form.description, handleChange, false)}
          {renderInput("number", "salePrice", "Sale Price", "Sale Price", form.salePrice, handleChange, true, 0)}
          {renderInput("number", "price", "Price", "Price", form.price, handleChange, true, 0)}
          {renderInput("file", "image", "Upload an Image", "Upload an Image", undefined, handleChange)}

          <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
            {mode === "create" ? "Create" : "Update"}
          </button>
        </form>
      </main>
    </div>
  );
};

ProductForm.propTypes = {
  initialForm: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    category_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    salePrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  mode: PropTypes.oneOf(["create", "update"]).isRequired,
};

export default ProductForm;
