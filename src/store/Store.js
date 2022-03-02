import React, { useEffect, useState, useCallback } from "react";

export const SharedStore = React.createContext({
  searchdb: (searchterm) => {},
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
  const [show, setShow] = useState({ status: false, id: 0 });

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
  };

  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <SharedStore.Provider
      value={{
        setSearch: setSearch,
        searchdb: searchdb,
        moviedb: moviedb,
        status: show.status,
        movieId: show.id,
        setShow: setShow,
      }}
    >
      {props.children}
    </SharedStore.Provider>
  );
};

export default Store;
