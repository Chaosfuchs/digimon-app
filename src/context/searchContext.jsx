/* eslint-disable react/prop-types */
import {createContext, useState} from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({children}) => {
  
  const [search, setSearch] = useState("");

  const updateSearch = (query) => {
    setSearch(query);
  }

  return (
    <SearchContext.Provider value={{search, updateSearch}}>
      {children}
    </SearchContext.Provider>
  )
}