import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { useDispatch } from "react-redux";

// Used for AddCategory and AddProduct

const AddItem = ({ itemType, items, ItemCard, addNewItem, addMultipleItems, createItemPath, removeItem }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addItem = async (item) => {
    setLoading(true);

    try {
      await addNewItem(item);
      handleRemove(item);
    } catch (err) {
      console.log(`Error Adding Item: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const addItems = async () => {
    setLoading(true);

    try {
      await addMultipleItems(items);

      items.forEach((item) => {
        handleRemove(item);
      });
    } catch (err) {
      console.log(`Error Adding Items: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="d-flex">
      <div className="m-5">
        <Link to={createItemPath} className="btn btn-light rounded-1">
          <CiCirclePlus style={{ transform: "translateY(-1px)" }} />
          <span className="ms-2">Create {itemType}</span>
        </Link>

        <div className="d-flex flex-wrap gap-2">
          {items.map((item, index) => (
            <div className="d-flex flex-column gap-1 my-2" key={index}>
              <ItemCard item={item} />
              <button className="btn btn-primary" onClick={() => addItem(item)} disabled={loading}>
                {loading ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                  `Add ${itemType}`
                )}
              </button>
              <button className="btn btn-danger" onClick={() => handleRemove(item)}>
                Remove {itemType}
              </button>
            </div>
          ))}
        </div>

        {items.length > 1 && (
          <button className="btn btn-info mt-3" onClick={addItems}>
            Add Every {itemType}
          </button>
        )}
      </div>
    </div>
  );
};

AddItem.propTypes = {
  itemType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  ItemCard: PropTypes.elementType.isRequired,
  addNewItem: PropTypes.func.isRequired,
  addMultipleItems: PropTypes.func.isRequired,
  createItemPath: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default AddItem;
