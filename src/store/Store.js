// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  clicked: false,
  searchValue: "",
  value: "",
  results: [],
};
const headerSlice = createSlice({
  name: "headerReducer",
  initialState,
  reducers: {
    toggle(state) {
      state.clicked = !state.clicked;
    },
    search(state, action) {
      state.value = action.payload;
    },
    results(state, action) {
      state.results = action.payload;
    },
    selectedSearch(state, action) {
      state.searchValue = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { headerReducer: headerSlice.reducer },
});

export const headerActions = headerSlice.actions;
export default store;
