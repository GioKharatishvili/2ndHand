import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../store/categories/categoriesSlice";
import { renderInput } from "../services/utils/utils";

const CreateCategoryForm = () => {
  const [form, setForm] = useState({
    name: "",
    image: "",
  });
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
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(addCategory(form));
    navigate("../adminPanel");
  };

  return (
    <div className="col-lg-4 col-12 mx-auto m-5 text-center">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <h1 className="h3 mb-3 fw-normal">Create Category</h1>

          {/* type, name, placeholder, label, value, onChange */}
          {renderInput("text", "name", "Name", "Name", form.name, handleChange)}
          {renderInput("file", "image", "Upload an Image", "Upload an Image", undefined, handleChange)}

          <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
            Create
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreateCategoryForm;
