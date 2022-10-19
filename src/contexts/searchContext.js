import React, { createContext, useState } from "react";

const SearchStateContext = createContext();

function SearchStateProvider({ children }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchedNewsData, setSearchedNewsData] = useState([]);
  const [saved, setSaved] = useState('Headlines');
  const [likeCounter, setLikeCounter] = useState({likeCounter:0});
  const [dislikeCounter, setDislikeCounter] = useState({dislikeCounter:10});


  return (
    <SearchStateContext.Provider value={{ searchKeyword, setSearchKeyword, searchedNewsData, setSearchedNewsData, saved, setSaved, isLoading, setIsLoading, likeCounter, setLikeCounter, dislikeCounter, setDislikeCounter}}>
      {children}
    </SearchStateContext.Provider>
  );
}

export { SearchStateContext, SearchStateProvider };