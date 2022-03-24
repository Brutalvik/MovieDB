import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: [],
  trending: [],
  selectedMovie: [],
  banner: [],
  error: { status: false, message: null },
};
const movieSlice = createSlice({
  name: "movieReducer",
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    setSelectedMovie(state, action) {
      state.selectedMovie = action.payload;
    },
    getGenres(state, action) {
      state.genres = action.payload;
    },
    getTrendings(state, action) {
      state.trending = action.payload;
    },
    setBanner(state, action) {
      state.banner = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;
