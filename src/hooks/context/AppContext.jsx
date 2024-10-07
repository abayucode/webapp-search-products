"use client"

import { createContext, useReducer, useEffect } from "react";
import appReducers, { initialState } from "../reducers/page";

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(appReducers, initialState)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

