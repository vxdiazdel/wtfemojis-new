import React, { useState, useEffect } from "react";
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
      fetch('https://raw.githubusercontent.com/vxdiazdel/wtfemojis/master/config/emojis.json')
        .then(res => res.json())
        .then(data => {
          setEmojis({ all: data, filtered: data });
          setIsLoading(false);
          localStorage.setItem('emojiData', JSON.stringify(data));
        });
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
