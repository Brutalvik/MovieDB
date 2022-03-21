import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { id: null, name: "", email: "", password: "", isLoggedIn: false },
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    registerUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const signupActions = signupSlice.actions;

export default signupSlice;
