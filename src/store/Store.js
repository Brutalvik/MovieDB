import React, { useEffect, useState } from "react";

export const SharedStore = React.createContext({
  searchdb: (searchterm) => {},
  handleModal: () => {},
});

const BASE_URL = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const ENDPOINT = "/discover/movie?sort_by=popularity.desc";

const URL = BASE_URL + ENDPOINT + API_KEY;

const Store = (props) => {
  const [search, setSearch] = useState({ phrase: "" });
  const [moviedb, setMovieDb] = useState({
    data: [],
    loaded: false,
    placeholder: "Loading...",
  });
  const [active, setActive] = useState({ modal: false });

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((result) =>
        setMovieDb((prevState) => {
          return {
            ...prevState,
            data: result.results,
            loaded: true,
            placeholder: "",
          };
        })
      );
  }, []);

  const searchdb = (searchTerm) => {
    setSearch((prevState) => {
      return { ...prevState, phrase: searchTerm };
    });
    // console.log(search.phrase);
    // console.log(searchTerm);
  };

  const handleModal = (status) => {
    setActive((prevState) => {
      return { ...prevState, modal: status };
    });
    console.log("Message from Store: " + status);
  };

  return (
    <SharedStore.Provider
      value={{
        setSearch: setSearch,
        searchdb: searchdb,
        moviedb: moviedb,
        handleModal: handleModal,
        status: active,
      }}
    >
      {props.children}
    </SharedStore.Provider>
  );
};

export default Store;
