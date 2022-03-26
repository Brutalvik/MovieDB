import React from "react";
import classes from "./Header.module.css";
import Toggle from "../../UI/Toggle/Toggle";
import Searchbar from "../Searchbar/Searchbar";
import Autocomplete from "../Autocomplete/Autocomplete";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchResults } from "../../store/showAction";
import { logicActions } from "../../store/logicReducer";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useSelector((state) => state.showReducer.search);
  const search = useSelector((state) => state.showReducer.search);
  const clicked = useSelector((state) => state.logicReducer.clicked);

  const handleClick = () => {
    dispatch(logicActions.setPage(1));
    navigate("/");
  };

  React.useEffect(() => {
    if (query) {
      dispatch(getSearchResults(query));
    }
  }, [query, dispatch]);

  return (
    <div
      className={`${classes.header_container} ${
        clicked ? classes.dark : classes.light
      }`}
    >
      <div className={classes.logo} onClick={handleClick}>
        <h1>MovieDB</h1>
      </div>
      <div className={classes.search}>
        <Searchbar />
        {search ? <Autocomplete /> : null}
      </div>
      <div>
        <Toggle />
      </div>
    </div>
  );
};

export default Header;
