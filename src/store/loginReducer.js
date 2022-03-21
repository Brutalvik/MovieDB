import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: { email: "", password: "", isLoggedIn: false } };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
