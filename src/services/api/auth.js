import { handleRequest } from "../utils/utils";
import { signInErrorAlert, registerSuccessAlert, signInSuccessAlert } from "../alerts/swal";

const BASE_URL = "http://localhost:3000/auth";

export const signIn = (signInForm) =>
  handleRequest("post", `${BASE_URL}/login`, signInForm, signInSuccessAlert, signInErrorAlert);

export const register = (registerForm) =>
  handleRequest("post", `${BASE_URL}/register`, registerForm, registerSuccessAlert);

export const updateToken = (refresh_token) => handleRequest("post", `${BASE_URL}/update-tokens`, { refresh_token });
