import { movieActions } from "./movieReducer";
import { logicActions } from "./logicReducer";

//Base Links
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
      throw new Error(
        dispatch(
          movieActions.setError({ status: true, message: error.message })
        )
      );
    }
  };
};
