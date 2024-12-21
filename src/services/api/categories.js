import { handleRequest } from "../utils/utils";
import {
  addItemSuccessAlert,
  addItemErrorAlert,
  deleteItemSuccessAlert,
  deleteItemErrorAlert,
} from "../../services/alerts/swal";

const API_URL = "http://localhost:3000/product-category";

export const getCategories = async () => handleRequest("get", API_URL);

export const addNewCategory = async (category) => {
  return handleRequest(
    "post",
    "http://localhost:3000/product-category",
    category,
    () => addItemSuccessAlert("Category"),
    () => addItemErrorAlert("Category")
  );
};

export const addMultipleCategories = async (categories) => {
  return handleRequest(
    "post",
    "http://localhost:3000/product-category/many",
    { categories },
    () => addItemSuccessAlert("Categories"),
    () => addItemErrorAlert("Categories")
  );
};

export const deleteCategory = async (id) => {
  return handleRequest(
    "delete",
    `http://localhost:3000/product-category/${id}`,
    null,
    () => deleteItemSuccessAlert("Category"),
    () => deleteItemErrorAlert("Category")
  );
};

export const deleteEveryCategory = async () => {
  return handleRequest(
    "delete",
    "http://localhost:3000/product-category/delete-all",
    null,
    () => deleteItemSuccessAlert("Every Category"),
    () => deleteItemErrorAlert("Every Category")
  );
};
