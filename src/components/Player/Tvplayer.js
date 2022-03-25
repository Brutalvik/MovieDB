import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { tvActions } from "../../store/tvReducer";
import classes from "./Player.module.css";

const Tvplayer = () => {
  const dispatch = useDispatch();
  const seasons = useSelector((state) => state.showReducer.playSelectedShow);
  const show = useSelector((state) => console.log(state.tvReducer));

  window.alias_open = window.open;

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    dispatch(
      tvActions.setShow({
        [event.target.name]: event.target.value,
      })
    );
  };

  const Season = () => {
    return (
      <div>
        <select
          name="season"
          onChange={handleChange}
          value={show ? show.season : 1}
        >
          {seasons.seasons?.map((season, index) => (
            <option key={index}>{season.season_number}</option>
          ))}
        </select>
      </div>
    );
  };

  const Episodes = () => {
    return (
      <select name="episodes" onChange={handleChange}>
        {seasons.seasons?.map((season, index) => (
          <option>{}</option>
        ))}
      </select>
    );
  };

  return (
    <div>
      <div>
        <Season />
      </div>
      <div>
        <Episodes />
      </div>
    </div>
  );
};

export default Tvplayer;
