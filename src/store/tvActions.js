import { logicActions } from "./logicReducer";
import { tvActions } from "./tvReducer";

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
