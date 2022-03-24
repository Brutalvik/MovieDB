import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  search: "",
  selectedShow: [],
  playSelectedShow: [],
};

const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    setResults(state, action) {
      state.results = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setSelectedShow(state, action) {
      state.selectedShow = action.payload;
    },
    setPlaySelectedShow(state, action) {
      state.playSelectedShow = action.payload;
    },
  },
});

export const showActions = showSlice.actions;

export default showSlice;
