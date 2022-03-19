import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clicked: false,
  searchValue: "",
  value: "",
  results: [],
  genres: [],
  trending: [],
  selectedMovie: [],
};
const movieSlice = createSlice({
  name: "headerReducer",
  initialState,
  reducers: {
    toggle(state) {
      state.clicked = !state.clicked;
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
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;
