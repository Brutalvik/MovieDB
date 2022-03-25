import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingTv: [],
  selectedTV: [],
  show: [],
};

const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    setTrendingTv(state, action) {
      state.trendingTv = action.payload;
    },
    setSelectedTV(state, action) {
      state.selectedTV = action.payload;
    },
    setShow(state, action) {
      state.show = action.payload;
    },
  },
});

export const tvActions = tvSlice.actions;

export default tvSlice;
