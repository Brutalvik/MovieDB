import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { tvActions } from "../../store/tvReducer";
import classes from "./Player.module.css";

const Tvplayer = () => {
  const dispatch = useDispatch();
  const seasons = useSelector((state) => state.showReducer.playSelectedShow);
  const show = useSelector((state) => state.tvReducer.show);
  // console.log(seasons);

  const TV_ENDPOINT = `${process.env.REACT_APP_FRAME}tv?id=`;
  window.alias_open = window.open;

  const handleSeasonChange = (event) => {
    event.preventDefault();
    dispatch(tvActions.setShow({ [event.target.name]: event.target.value }));
  };

  let episodes = [];

  const Season = () => {
    return (
      <div>
        <div>
          <select onChange={handleSeasonChange} name="season">
            {seasons.seasons?.map((season, index) => (
              <option key={index} value={season.season_number}>
                {season.season_number}
              </option>
            ))}
          </select>
        </div>
        <div></div>
      </div>
    );
  };

  // const Episodes = () => {
  //   let ep = [];
  //   return (
  //     <select>
  //       {seasons.seasons?.map((season, index) => {
  //         if (selectedSeason === season.season_number) {
  //           for (let i = 0; i <= season.episode_count; i++) {
  //             ep.push(i);
  //           }
  //         }
  //         ep?.map((e, i) => (
  //           <option key={i} value={e}>
  //             {e}
  //           </option>
  //         ));
  //       })}
  //     </select>
  //   );
  // };

  return (
    <div>
      <div>
        <Season />
      </div>
      <div></div>
    </div>
  );
};

export default Tvplayer;
