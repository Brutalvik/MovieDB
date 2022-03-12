import React, { useEffect, useState } from "react";

export const SharedStore = React.createContext({
  handleSearchQuery: () => {},
  toggleMode: () => {},
});

const BASE_URL = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const DISCOVER_ENDPOINT = process.env.REACT_APP_DISCOVER_ENDPOINT;
const SEARCH_MOVIE_ENDPOINT = process.env.REACT_APP_MOVIE_ENDPOINT;
const SEARCH_TV_ENDPOINT = "/search/tv?";

const DISCOVER_URL = BASE_URL + DISCOVER_ENDPOINT + API_KEY;
const SEARCH_MOVIE_URL = BASE_URL + SEARCH_MOVIE_ENDPOINT + API_KEY;
const SEARCH_TV_URL = `${BASE_URL}${SEARCH_TV_ENDPOINT}${API_KEY}`;
const Store = (props) => {
  const [mode, setMode] = useState({ mode: false });

  const [search, setSearch] = useState("");
  const [moviedb, setMovieDb] = useState({
    data: [],
    loaded: false,
    placeholder: "Loading...",
  });
  const [searchdb, setSearchdb] = useState({
    data: [],
    pages: 0,
    loaded: false,
    placeholder: "Loading...",
  });
  const [show, setShow] = useState({ status: false, id: 0 });

  //DISCOVER
  useEffect(() => {
    fetch(DISCOVER_URL)
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

  //SEARCH_ENDPOINT_FOR_MOVIE
  useEffect(() => {
    fetch(
      `${SEARCH_MOVIE_URL}&language=en-US&query=${search}&include_adult=false`
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((result) =>
        setSearchdb((prevState) => {
          return {
            ...prevState,
            data: result.results,
            pages: result.total_pages,
            loaded: true,
            placeholder: "",
          };
        })
      );
  }, [search]);

  //SEARCH_ENDPOINT_FOR_TV
  useEffect(() => {
    fetch(
      `${SEARCH_TV_URL}&language=en-US&page=1&include_adult=false&query=${search}`
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((result) =>
        setSearchdb((prevState) => {
          return {
            ...prevState,
            data: result.results,
            loaded: true,
            placeholder: "",
          };
        })
      );
  }, [search]);

  //Functions
  const toggleMode = useEffect(() => {
    setMode(false);
  }, [mode]);

  const handleSearchQuery = (e) => {
    e.preventDefault();
    console.log(searchdb);
  };

  return (
    <SharedStore.Provider value={{ toggleMode }}>
      {props.children}
    </SharedStore.Provider>
  );
};

export default Store;
