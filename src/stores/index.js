import React, { useState } from "react";
import { EmojiContext } from "./emoji-context";
import { SearchContext } from "./search-context";
import emojiData from '../config/emojis';

const Store = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [emojis, setEmojis] = useState(emojiData);

  return (
    <SearchContext.Provider value={[searchText, setSearchText]}>
      <EmojiContext.Provider value={[emojis, setEmojis]}>
        {children}
      </EmojiContext.Provider>
    </SearchContext.Provider>
  );
};

export default Store;
