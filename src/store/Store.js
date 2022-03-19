import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieReducer";
import tvSlice from "./tvReducer";
import logicSlice from "./logicReducer";
const store = configureStore({
  reducer: {
    movieReducer: movieSlice.reducer,
    logicReducer: logicSlice.reducer,
    tvReducer: tvSlice.reducer,
  },
});

export default store;
