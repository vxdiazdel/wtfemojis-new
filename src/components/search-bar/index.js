import React, { useContext, useEffect } from "react";
import { SearchContext } from "../../stores/search-context";
import { EmojiContext } from "../../stores/emoji-context";
import * as Styled from "./styled-components";

const SearchBar = () => {
  const [searchText, setSearchText] = useContext(SearchContext);
  const [emojis, setEmojis] = useContext(EmojiContext);
  const { all } = emojis;

  useEffect(() => {
    if (!searchText.length) return setEmojis({ all, filtered: all });

    setEmojis({
      all,
      filtered: all.filter(
        emoji => emoji.name.toLowerCase().indexOf(searchText) !== -1
      )
    });
  }, [all, searchText, setEmojis]);

  return (
    <Styled.Input
      type="text"
      placeholder="Search..."
      onChange={e => setSearchText(e.target.value)}
      value={searchText}
    />
  );
};

export default SearchBar;
