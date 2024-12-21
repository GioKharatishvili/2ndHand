import { handleRequest } from "../utils/utils";
import {
  addItemSuccessAlert,
  addItemErrorAlert,
  deleteItemSuccessAlert,
  deleteItemErrorAlert,
  updateProductSuccessAlert,
  updateProductErrorAlert,
} from "../../services/alerts/swal";

const API_URL = "http://localhost:3000/product";

export const getProducts = async () => handleRequest("get", API_URL);

export const addNewProduct = async (product) => {
  return handleRequest(
    "post",
    API_URL,
    product,
    () => addItemSuccessAlert("Product"),
    () => addItemErrorAlert("Product")
  );
};

export const addMultipleProducts = async (products) => {
  return handleRequest(
    "post",
    `${API_URL}/many`,
    { products },
    () => addItemSuccessAlert("Products"),
    () => addItemErrorAlert("Products")
  );
};

export const updateProduct = async (product) => {
  return handleRequest("put", API_URL, product, updateProductSuccessAlert, updateProductErrorAlert);
};

export const deleteProduct = async (ids) => {
  return handleRequest(
    "delete",
    API_URL,
    { ids },
    () => deleteItemSuccessAlert("Product(s)"),
    () => deleteItemErrorAlert("Product(s)")
  );
};

export const deleteEveryProduct = async () => {
  return handleRequest(
    "delete",
    `${API_URL}/delete-all`,
    null,
    () => deleteItemSuccessAlert("Products"),
    () => deleteItemErrorAlert("Products")
  );
};
