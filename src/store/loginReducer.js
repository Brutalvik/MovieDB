import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { id: null, email: "", password: "", isLoggedIn: false },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
