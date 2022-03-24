import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieReducer";
import tvSlice from "./tvReducer";
import logicSlice from "./logicReducer";
import loginSlice from "./loginReducer";
import signupSlice from "./signupReducer";
import showSlice from "./showReducer";

const store = configureStore({
  reducer: {
    movieReducer: movieSlice.reducer,
    logicReducer: logicSlice.reducer,
    tvReducer: tvSlice.reducer,
    signupReducer: signupSlice.reducer,
    loginReducer: loginSlice.reducer,
    showReducer: showSlice.reducer,
  },
});

export default store;
