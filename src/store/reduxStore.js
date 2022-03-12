import { createStore } from "redux";

const toggleReducer = (state = { clicked: false }, action) => {
  if (action.type === "clicked") {
    return { clicked: !state.clicked };
  }
  return state;
};

const store = createStore(toggleReducer);

export default store;
