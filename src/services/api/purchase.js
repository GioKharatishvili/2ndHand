import { handleRequest } from "../utils/utils";
import {
  purchaseErrorAlert,
  purchaseRemovalErrorAlert,
  purchaseRemovalSuccessAlert,
  purchaseSuccessAlert,
} from "../alerts/swal";

const API_URL = "http://localhost:3000/purchases";

export const getPurchaseHistory = async () => handleRequest("get", API_URL);

export const purchaseItems = async (totalPrice, totalItems) =>
  handleRequest("post", API_URL, { totalPrice, totalItems }, purchaseSuccessAlert, purchaseErrorAlert);

export const cancelPurchase = async (id) =>
  handleRequest("delete", `${API_URL}/${id}`, { id }, purchaseRemovalSuccessAlert, purchaseRemovalErrorAlert);
