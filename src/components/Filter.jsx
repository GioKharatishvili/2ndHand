import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCategories } from "../services/api/categories";
import { fetchData, renderInput } from "../services/utils/utils";

const Filter = () => {
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getSearchParam = (key, defaultValue = "") => searchParams.get(key) || defaultValue;

  const selectedCategory = getSearchParam("category");
  const minPrice = getSearchParam("minPrice");
  const maxPrice = getSearchParam("maxPrice");
  const title = getSearchParam("title");
  const onSale = getSearchParam("onSale") === "true";
  const pageSize = getSearchParam("pageSize", "10");

  useEffect(() => {
    fetchData(getCategories, setCategories, () => {});
  }, []);

  const updateSearchParams = (key, value) => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev),
      [key]: value,
    }));
  };

  const handleCategorySelect = (categoryName) => updateSearchParams("category", categoryName);

  const handleInputChange = (name, value) => updateSearchParams(name, value);

  const handleCheckboxChange = () => updateSearchParams("onSale", !onSale);

  const handleClearClick = () => setSearchParams({});

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px", minHeight: "100vh" }}>
      <p className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Filter</span>
      </p>
      <hr />

      <h3>Products Per Page</h3>
      {renderInput(
        "number",
        "pageSize",
        "Enter number of products per page",
        "Products Per Page",
        pageSize,
        (e) => handleInputChange("pageSize", e.target.value),
        false,
        1
      )}

      <h3 className="mt-2">Category</h3>
      <div className="dropdown mt-2">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedCategory || "Select a Category"}
        </button>
        <ul className="dropdown-menu">
          {categories.map(({ id, name }) => (
            <li key={id}>
              <button
                className={`dropdown-item ${selectedCategory === name ? "active" : ""}`}
                onClick={() => handleCategorySelect(name)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="mt-2">Search By Title</h3>
      {renderInput("text", "title", "Enter product title", "Search By Title", title, (e) =>
        handleInputChange("title", e.target.value)
      )}

      <h3 className="mt-2">Minimum Price</h3>
      {renderInput(
        "number",
        "minPrice",
        "Enter minimum price",
        "Minimum Price",
        minPrice,
        (e) => handleInputChange("minPrice", e.target.value),
        true,
        0
      )}

      <h3 className="mt-2">Maximum Price</h3>
      {renderInput(
        "number",
        "maxPrice",
        "Enter maximum price",
        "Maximum Price",
        maxPrice,
        (e) => handleInputChange("maxPrice", e.target.value),
        true,
        0
      )}

      <div className="d-flex align-items-center gap-2 mt-3">
        <label className="form-check-label">On Sale</label>
        <input type="checkbox" checked={onSale} onChange={handleCheckboxChange} />
      </div>

      <button className="btn btn-danger col-4 mt-2" onClick={handleClearClick}>
        Clear
      </button>
    </div>
  );
};

export default Filter;
