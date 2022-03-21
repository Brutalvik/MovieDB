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

const BASE_URL = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

//Thunk to fetch movies
export const fetchMovies = (page) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `${BASE_URL}trending/movie/day?${API_KEY}&language=en-US&page=${page}`
      );
      if (response.status !== 200) {
        dispatch(
          movieActions.setError({
            status: true,
            message: "Error Fetching Movies",
          })
        );
        console.log(response);
      }
      return await response.json();
    };
    try {
      await sendRequest().then((data) => {
        dispatch(logicActions.setLoading(true));
        dispatch(movieActions.getTrendings(data.results));
        dispatch(logicActions.setLoading(false));
        console.log("Function running from thunk");
      });
    } catch (error) {
      throw new Error("Error");
    }
  };
};

export const movieActions = movieSlice.actions;

export default movieSlice;
