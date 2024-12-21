import { updateInfoErrorAlert, updateInfoSuccessAlert } from "../alerts/swal";
import { handleRequest } from "../utils/utils";

const BASE_URL = "http://localhost:3000/user";

export const getUserInfo = () => handleRequest("get", `${BASE_URL}/current-user`);

export const updateInfo = (updateInfoForm) =>
  handleRequest("put", BASE_URL, updateInfoForm, updateInfoSuccessAlert, updateInfoErrorAlert);
