"use client"

import { createContext, useReducer } from "react";
import displayProduct, { initialState } from "../reducers/display-product/page";

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(displayProduct, initialState)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

