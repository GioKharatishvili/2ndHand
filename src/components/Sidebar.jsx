import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Sidebar = ({ activeLink, setActiveLink }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px", minHeight: "100vh" }}>
      <p className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Admin Panel</span>
      </p>
      <hr />
      <h2>Products</h2>
      <div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link
              to="#"
              className={`nav-link ${activeLink === "currentProducts" ? "active" : "text-white"}`}
              onClick={() => setActiveLink("currentProducts")}
              aria-current="page"
            >
              Current Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#"
              className={`nav-link ${activeLink === "addProduct" ? "active" : "text-white"}`}
              onClick={() => setActiveLink("addProduct")}
              aria-current="page"
            >
              Add Products
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={`nav-link ${activeLink === "updateProduct" ? "active" : "text-white"}`}
              onClick={() => setActiveLink("updateProduct")}
            >
              Update Products
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={`nav-link ${activeLink === "deleteProduct" ? "active" : "text-white"}`}
              onClick={() => setActiveLink("deleteProduct")}
            >
              Delete Products
            </Link>
          </li>
        </ul>
      </div>
      <h2 className="mt-2">Categories</h2>
      <div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link
              to="#"
              className={`nav-link ${activeLink === "currentCategories" ? "active" : "text-white"}`}
              onClick={() => setActiveLink("currentCategories")}
              aria-current="page"
            >
              Current Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#"
              className={`nav-link ${activeLink === "addCategory" ? "active" : "text-white"}`}
              onClick={() => setActiveLink("addCategory")}
              aria-current="page"
            >
              Add Categories
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={`nav-link ${activeLink === "deleteCategory" ? "active" : "text-white"}`}
              onClick={() => setActiveLink("deleteCategory")}
            >
              Delete Categories
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  activeLink: PropTypes.string.isRequired,
  setActiveLink: PropTypes.func.isRequired,
};

export default Sidebar;
