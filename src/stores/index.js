import React, { useState, useEffect } from "react";
import { EMOJIS_API } from '../config/constants';
import { EmojiContext } from "./emoji-context";
import { SearchContext } from "./search-context";
import { ErrorContext } from "./error-context";
import { LoadingContext } from "./loading-context";

const Store = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [emojis, setEmojis] = useState({ all: [], filtered: [] });
  const [hasError, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (!localStorage.getItem('emojiData')) {
      const fetchData = async () => {
        const res = await fetch(EMOJIS_API);
        const data = await res.json();
        setEmojis({ all: data, filtered: data });
        setIsLoading(false);
        localStorage.setItem('emojiData', JSON.stringify(data));
      }
      fetchData();
    } else {
      const data = JSON.parse(localStorage.getItem('emojiData'));
      setEmojis({ all: data, filtered: data });
      setIsLoading(false);
    }
  }, []);

  return (
    <LoadingContext.Provider value={[isLoading, setIsLoading]}>
      <SearchContext.Provider value={[searchText, setSearchText]}>
        <EmojiContext.Provider value={[emojis, setEmojis]}>
          <ErrorContext.Provider value={[hasError, setError]}>
            {children}
          </ErrorContext.Provider>
        </EmojiContext.Provider>
      </SearchContext.Provider>
    </LoadingContext.Provider>
  );
};

export default Store;
