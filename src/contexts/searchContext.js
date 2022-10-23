import React, { createContext, useState } from "react";

const SearchStateContext = createContext();

function SearchStateProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchedNewsData, setSearchedNewsData] = useState([]);
  const [saved, setSaved] = useState('Headlines');
  const [likeCounter, setLikeCounter] = useState({likeCounter:0});
  const [dislikeCounter, setDislikeCounter] = useState({dislikeCounter:0});
  const [commentsValue, setCommentsValue] = useState({commentsValue: ''})
  const [displayComments, setDisplayComments] = useState({commentsValue: ''})



  return (
    <SearchStateContext.Provider value={{ isDark, setIsDark, searchKeyword, setSearchKeyword, searchedNewsData, setSearchedNewsData, saved, setSaved, isLoading, setIsLoading, likeCounter, setLikeCounter, dislikeCounter, setDislikeCounter, commentsValue, setCommentsValue, displayComments, setDisplayComments}}>
      {children}
    </SearchStateContext.Provider>
  );
}

export { SearchStateContext, SearchStateProvider };