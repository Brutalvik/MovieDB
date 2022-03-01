import React from "react";
import Header from "./components/Header";
import Store from "./store/Store";
const App = () => {
  return (
    <Store>
      <Header />
    </Store>
  );
};

export default App;
