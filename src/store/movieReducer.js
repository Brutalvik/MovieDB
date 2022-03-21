import { createSlice } from "@reduxjs/toolkit";
import { logicActions } from "./logicReducer";

const initialState = {
  moviepage: 1,
  searchValue: "",
  value: "",
  results: [],
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
    search(state, action) {
      state.value = action.payload;
    },
    results(state, action) {
      state.results = action.payload;
    },
    selectedSearch(state, action) {
      state.searchValue = action.payload;
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
