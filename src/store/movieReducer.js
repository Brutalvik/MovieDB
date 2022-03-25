import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: [],
  trending: [],
  error: { status: false, message: null },
};
const movieSlice = createSlice({
  name: "movieReducer",
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    getGenres(state, action) {
      state.genres = action.payload;
    },
    getTrendings(state, action) {
      state.trending = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;
