import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clicked: false,
  moviepage: 1,
  tvpage: 1,
  movie: true,
};

const logicSlice = createSlice({
  name: "logic",
  initialState,
  reducers: {
    toggle(state) {
      state.clicked = !state.clicked;
    },
    incrementMovie(state) {
      if (state.moviepage <= 0 || state.moviepage >= 10) {
        state.moviepage = 1;
      } else {
        state.moviepage++;
      }
    },
    decrementMovie(state) {
      if (state.moviepage <= 1 || state.moviepage >= 10) {
        state.moviepage = 1;
      } else {
        state.moviepage--;
      }
    },
    incrementTv(state) {
      if (state.tvpage <= 0 || state.tvpage >= 10) {
        state.tvpage = 1;
      } else {
        state.tvpage++;
      }
    },
    decrementTv(state) {
      if (state.tvpage <= 1 || state.tvpage >= 10) {
        state.tvpage = 1;
      } else {
        state.tvpage--;
      }
    },
    setPlayer(state, action) {
      state.movie = action.payload;
    },
  },
});

export const logicActions = logicSlice.actions;

export default logicSlice;
