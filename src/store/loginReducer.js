import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { email: "", password: "" },
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = {
        email: action.payload.email,
        password: action.payload.password,
      };
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
