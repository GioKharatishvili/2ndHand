import { useEffect, useState } from "react";
import { renderInput } from "../services/utils/utils";
import { deleteProduct, deleteEveryProduct } from "../services/api/products";
import { deleteEveryItemConfirmation, emptyIdErrorAlert } from "../services/alerts/swal";

const DeleteProduct = () => {
  const [ids, setIds] = useState(() => {
    const storedIds = localStorage.getItem("ids");
    return storedIds ? JSON.parse(storedIds) : [""];
  });

  useEffect(() => {
    localStorage.setItem("ids", JSON.stringify(ids));
  }, [ids]);

  const handleInputChange = (index, value) => {
    const updatedIds = [...ids];
    updatedIds[index] = value;
    setIds(updatedIds);
  };

  const addInputField = () => setIds([...ids, ""]);

  const removeInputField = (index) => setIds(ids.filter((_, i) => i !== index));

  const handleDeleteClick = async () => {
    if (ids.includes("")) {
      emptyIdErrorAlert();

      return;
    }

    try {
      await deleteProduct(ids);
      localStorage.setItem("ids", [""]);
    } catch (err) {
      console.log(`Error Deleting Product(s): ${err}`);
    }
  };

  const handleDeleteAllClick = async () => {
    const result = await deleteEveryItemConfirmation();
    if (result.isConfirmed) {
      try {
        await deleteEveryProduct();
      } catch (err) {
        console.log(`Error Deleting Every Product: ${err}`);
      }
    }
  };

  return (
    <div className="d-flex flex-column p-4">
      <div>
        {ids.map((id, index) => (
          <div key={index} className="d-flex align-items-center mb-2" style={{ width: "30vw" }}>
            {renderInput("text", `id-${index}`, "Enter ID", `ID ${index + 1}`, id, (e) =>
              handleInputChange(index, e.target.value)
            )}
            <button className="btn btn-danger ms-2" onClick={() => removeInputField(index)} disabled={ids.length === 1}>
              Remove
            </button>
          </div>
        ))}
        <button className="btn btn-primary mt-2" onClick={addInputField}>
          Add More IDs
        </button>
      </div>
      <div>
        <button className="btn btn-warning mt-3" onClick={handleDeleteClick}>
          Delete Product(s)
        </button>
      </div>
      <div>
        <button className="btn btn-danger mt-5" onClick={handleDeleteAllClick}>
          Delete Every Product
        </button>
      </div>
    </div>
  );
};

export default DeleteProduct;
