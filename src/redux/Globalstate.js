import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./Appreducer";

// initial state
const initialState = {
  favorite: localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(state.favorite));
  }, [state]);

  // actions
  const addfav = (jobs) => {
    dispatch({ type: "ADD_JOBS_TO_FAVORITE", payload: jobs });
  };

  const removefav = (id) => {
    dispatch({ type: "REMOVE_JOBS_FROM_FAVORITE", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        favorite: state.favorite,
        addfav,
        removefav,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};