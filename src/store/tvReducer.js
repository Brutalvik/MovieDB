import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trending: [],
  selectedTv: [],
  selectedtvShow: [],
  show: [],
};

const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    getTrendings(state, action) {
      state.trending = action.payload;
    },
    setSelectedTv(state, action) {
      state.selectedTv = action.payload;
    },
    setSelectedtvShow(state, action) {
      state.selectedtvShow = action.payload;
    },
    setShow(state, action) {
      state.show = action.payload;
    },
  },
});

export const tvActions = tvSlice.actions;

export default tvSlice;
