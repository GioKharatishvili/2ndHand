import { likedItemAddErrorAlert, likedItemRemoveErrorAlert } from "../alerts/swal";
import { handleRequest } from "../utils/utils";

const API_URL = "http://localhost:3000/liked-products";

export const getLikedProducts = () => handleRequest("get", API_URL);

export const addLikedProduct = (product_id) => handleRequest("post", API_URL, { product_id }, null, likedItemAddErrorAlert);

export const removeLikedProduct = (id) => handleRequest("delete", `${API_URL}/${id}`, null, null, likedItemRemoveErrorAlert);
