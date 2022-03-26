import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieReducer";
import logicSlice from "./logicReducer";
import showSlice from "./showReducer";

const store = configureStore({
  reducer: {
    movieReducer: movieSlice.reducer,
    logicReducer: logicSlice.reducer,
    showReducer: showSlice.reducer,
  },
});

export default store;
