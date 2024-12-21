import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AddProduct from "../components/AddProduct";
import UpdateProduct from "../components/UpdateProduct";
import DeleteProduct from "../components/DeleteProduct";
import AddCategory from "../components/AddCategory";
import DeleteCategory from "../components/DeleteCategory";
import CurrentCategories from "../components/CurrentCategories";
import CurrentProducts from "../components/CurrentProducts";

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState(localStorage.getItem("activeSection") || "currentProducts");

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();

      // This is required for some browsers
      e.returnValue = "Are you sure you want to leave? Changes you made may not be saved.";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case "currentProducts":
        return <CurrentProducts />;
      case "addProduct":
        return <AddProduct />;
      case "updateProduct":
        return <UpdateProduct />;
      case "deleteProduct":
        return <DeleteProduct />;
      case "currentCategories":
        return <CurrentCategories />;
      case "addCategory":
        return <AddCategory />;
      case "deleteCategory":
        return <DeleteCategory />;
      default:
        return <CurrentProducts />;
    }
  };

  return (
    <div className="d-flex">
      <Sidebar activeLink={activeSection} setActiveLink={setActiveSection} />
      <div className="content-area">{renderContent()}</div>
    </div>
  );
};

export default AdminPanel;
