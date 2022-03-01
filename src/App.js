import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Store from "./store/Store";
import classes from "./App.module.css";
const App = () => {
  return (
    <Store>
      <mai className={classes.wrapper}>
        <Header />
        <Banner />
      </mai>
    </Store>
  );
};

export default App;
