import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieReducer";
import logicSlice from "./logicReducer";
const store = configureStore({
  reducer: {
    movieReducer: movieSlice.reducer,
    logicReducer: logicSlice.reducer,
  },
});

export default store;
