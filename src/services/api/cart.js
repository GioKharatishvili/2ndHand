import { handleRequest } from "../utils/utils";
import {
  cartClearErrorAlert,
  cartClearSuccessAlert,
  cartItemAddErrorAlert,
  cartItemAddSuccessAlert,
  cartItemRemoveErrorAlert,
  cartItemRemoveSuccessAlert,
} from "../alerts/swal";

const API_URL = "http://localhost:3000/cart";

export const getProductsFromCart = async () => {
  return handleRequest("get", API_URL);
};

export const addProductToCart = async (product_id) => {
  return handleRequest("post", API_URL, { product_id }, cartItemAddSuccessAlert, cartItemAddErrorAlert);
};

export const removeItemFromCart = async (product_id) => {
  return handleRequest(
    "delete",
    `${API_URL}/${product_id}`,
    null,
    cartItemRemoveSuccessAlert,
    cartItemRemoveErrorAlert
  );
};

export const clearCart = async () => {
  return handleRequest("post", `${API_URL}/clear`, null, cartClearSuccessAlert, cartClearErrorAlert);
};
