import React, { useState } from "react";
import { EmojiContext } from "./emoji-context";
import { SearchContext } from "./search-context";
import { ErrorContext } from "./error-context";
import emojiData from "../config/emojis";

const Store = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [emojis, setEmojis] = useState({ all: emojiData, filtered: emojiData });
  const [hasError, setError] = useState(null);

  return (
    <SearchContext.Provider value={[searchText, setSearchText]}>
      <EmojiContext.Provider value={[emojis, setEmojis]}>
        <ErrorContext.Provider value={[hasError, setError]}>
          {children}
        </ErrorContext.Provider>
      </EmojiContext.Provider>
    </SearchContext.Provider>
  );
};

export default Store;
