// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { clicked: false, value: "test", results: [] };
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
  },
});

const store = configureStore({
  reducer: { headerReducer: headerSlice.reducer },
});

export const headerActions = headerSlice.actions;
export default store;
