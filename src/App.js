import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Store from "./store/Store";
import classes from "./App.module.css";
import Movies from "./components/Movies";
import Modal from "./components/Modal";

const App = () => {
  return (
    <Store>
      <header>
        <Header />
        <Banner />
      </header>
      <main className={classes.wrapper}>
        <Movies />
        <Modal />
      </main>
    </Store>
  );
};

export default App;
