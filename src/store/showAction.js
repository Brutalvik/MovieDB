import { showActions } from "./showReducer";
const BASE_URL = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getSearchResults = (query) => {
  return async (dispatch) => {
    const fetchSearchResults = async () => {
      const response = await fetch(
        `${BASE_URL}search/multi?${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      return response.json();
    };

    try {
      fetchSearchResults().then((data) => {
        dispatch(showActions.setResults(data.results));
      });
    } catch (error) {
      console.log(error);
    }
  };
};
