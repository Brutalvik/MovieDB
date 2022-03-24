import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: "", email: "", password: "" },
  isLoggedIn: false,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    registerUser(state, action) {
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    },
  },
});
export const signupActions = signupSlice.actions;

export default signupSlice;
