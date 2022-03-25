import { logicActions } from "./logicReducer";
import { tvActions } from "./tvReducer";
import { showActions } from "./showReducer";

const BASE_URL = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getPopularTv = (page) => {
  return async (dispatch) => {
    const fetchTVApi = async () => {
      const response = await fetch(
        `${BASE_URL}tv/popular?${API_KEY}&language=en-US&page=${page}`
      );
      const data = await response.json();
      return data;
    };

    try {
      await fetchTVApi().then((data) => {
        dispatch(logicActions.setLoading(true));
        dispatch(tvActions.setTrendingTv(data.results));
        dispatch(logicActions.setLoading(false));
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getTvShow = (showId) => {
  return async (dispatch) => {
    console.log("recieved ID in thunk " + showId);
    const fetchTVShow = async () => {
      const response = await fetch(
        `${BASE_URL}tv/${showId}?${API_KEY}&language=en-US`
      );
      return response.json();
    };

    try {
      await fetchTVShow().then((data) => {
        dispatch(logicActions.setLoading(true));
        dispatch(showActions.setPlaySelectedShow(data));
        dispatch(logicActions.setLoading(false));
      });
    } catch (error) {
      console.log(error);
    }
  };
};
