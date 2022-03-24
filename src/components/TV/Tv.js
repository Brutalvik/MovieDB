import React from "react";
import classes from "./Tv.module.css";
import Trendingtv from "../Trendingtv/Trendingtv";
import Spinner from "../../UI/Spinner/Spinner";
import Pages from "../Pages/Pages";
import { useSelector } from "react-redux";

const Tv = () => {
  const loading = useSelector((state) => state.logicReducer.loading);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Trending TV</h1>
      </div>

      <div>
        {loading ? (
          <div className={classes.center}>
            <Spinner />
          </div>
        ) : (
          <>
            <div className={classes.pages_header}>
              <Pages />
            </div>
            <Trendingtv />
          </>
        )}
      </div>
    </div>
  );
};

export default Tv;
