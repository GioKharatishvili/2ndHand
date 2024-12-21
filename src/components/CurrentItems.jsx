import { useEffect, useState } from "react";
import { fetchData } from "../services/utils/utils";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

// Used for CurrentCategories.jsx and CurrentProducts.jsx

const CurrentItems = ({ fetchItems, ItemComponent, emptyMessage }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(fetchItems, (data) => setItems(data.products || data), setLoading);
  }, [fetchItems]);

  return (
    <div className="d-flex justify-content-center flex-wrap gap-3 p-3">
      {loading ? (
        <Spinner />
      ) : items.length > 0 ? (
        items.map((item) => <ItemComponent key={item.id} item={item} />)
      ) : (
        <h2>{emptyMessage}</h2>
      )}
    </div>
  );
};

CurrentItems.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  ItemComponent: PropTypes.elementType.isRequired,
  emptyMessage: PropTypes.string.isRequired,
};

export default CurrentItems;
