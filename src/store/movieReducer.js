import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  value: "",
  results: [],
  genres: [],
  trending: [],
  selectedMovie: [],
};
const movieSlice = createSlice({
  name: "movieReducer",
  initialState,
  reducers: {
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
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;
