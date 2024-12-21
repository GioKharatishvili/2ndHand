import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  refresh_token: localStorage.getItem("refresh_token") || null,
  isAuthorized: localStorage.getItem("token") ? true : false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { access_token, refresh_token } = action.payload;
      state.token = access_token;
      state.refresh_token = refresh_token;
      state.isAuthorized = true;
      localStorage.setItem("token", JSON.stringify(access_token));
      localStorage.setItem("refresh_token", JSON.stringify(refresh_token));
    },
    updateAuth: (state, action) => {
      const { access_token, refresh_token } = action.payload;
      if (access_token) {
        state.token = access_token;
        localStorage.setItem("token", JSON.stringify(access_token));
      }
      if (refresh_token) {
        state.refresh_token = refresh_token;
        localStorage.setItem("refresh_token", JSON.stringify(refresh_token));
      }
    },
    clearAuth: (state) => {
      state.token = null;
      state.refresh_token = null;
      state.isAuthorized = false;
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
    },
  },
});

export const { setAuth, updateAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
