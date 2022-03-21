import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  loading: false,
  clicked: false,
  player: true,
  modal: false,
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
    setPage(state, action) {
      state.page = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setPlayer(state, action) {
      state.player = action.payload;
    },
    setModal(state) {
      state.modal = !state.modal;
    },
  },
});

export const logicActions = logicSlice.actions;

export default logicSlice;
