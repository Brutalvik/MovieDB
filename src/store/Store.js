import React, { useState } from "react";

export const SharedStore = React.createContext({});

const Store = (props) => {
  const [search, setSearch] = useState("");

  const searchdb = (searchTerm) => {
    setSearch(searchTerm);
  };

  return (
    <SharedStore.Provider value={{ setSearch: setSearch, searchdb: searchdb }}>
      {props.children}
    </SharedStore.Provider>
  );
};

export default Store;
