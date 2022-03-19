import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

const logicSlice = createSlice({
  name: "logic",
  initialState,
  reducers: {
    increment(state) {
      if (state.page <= 0 || state.page >= 10) {
        state.page = 1;
      } else {
        state.page++;
      }
    },
    decrement(state) {
      if (state.page <= 1 || state.page >= 10) {
        state.page = 1;
      } else {
        state.page--;
      }
    },
  },
});

export const logicActions = logicSlice.actions;

export default logicSlice;
