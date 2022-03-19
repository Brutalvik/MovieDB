import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  clicked: false,
  player: true,
};

const logicSlice = createSlice({
  name: "logic",
  initialState,
  reducers: {
    toggle(state) {
      state.clicked = !state.clicked;
    },
    increment(state) {
      if (state.page <= 0) {
        state.page = 1;
      } else {
        state.page++;
      }
    },
    decrement(state) {
      if (state.page <= 1) {
        state.page = 1;
      } else {
        state.page--;
      }
    },
    setPlayer(state, action) {
      state.player = action.payload;
    },
  },
});

export const logicActions = logicSlice.actions;

export default logicSlice;
