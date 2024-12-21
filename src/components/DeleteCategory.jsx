import { useState } from "react";
import { renderInput } from "../services/utils/utils";
import { deleteCategory, deleteEveryCategory } from "../services/api/categories";
import { deleteEveryItemConfirmation } from "../services/alerts/swal";

const DeleteCategory = () => {
  const [id, setId] = useState("");

  const handleChange = (e) => setId(e.target.value);

  const handleDeleteClick = async () => await deleteCategory(id);

  const handleDeleteAllClick = async () => {
    const result = await deleteEveryItemConfirmation();
    if (result.isConfirmed) {
      await deleteEveryCategory();
    }
  };

  return (
    <div className="d-flex flex-column p-4">
      <div>
        <div style={{ width: "30vw" }}>
          {/* type, name, placeholder, label, value, onChange */}
          {renderInput("text", "id", "Enter ID", "ID", id, handleChange)}
        </div>
        <button className="btn btn-warning mt-1" onClick={handleDeleteClick}>
          Delete Category
        </button>
      </div>
      <div>
        <button className="btn btn-danger mt-5" onClick={handleDeleteAllClick}>
          Delete Every Category
        </button>
      </div>
    </div>
  );
};

export default DeleteCategory;
