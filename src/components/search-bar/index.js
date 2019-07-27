import React, { useContext } from "react";
import { SearchContext } from "../../stores/search-context";
import { EmojiContext } from "../../stores/emoji-context";
import * as Styled from "./styled-components";

const SearchBar = () => {
  const [searchText, setSearchText] = useContext(SearchContext);
  const [emojis, setEmojis] = useContext(EmojiContext);
  const { all } = emojis;

  const handleChange = e => {
    const { value } = e.target;
    setSearchText(value);

    if (!value) return setEmojis({ all, filtered: all });
    
    const filtered = all.filter(
      x => x.name.toLowerCase().indexOf(value) !== -1
    );

    setEmojis({ all, filtered });
  }

  return (
    <Styled.Input
      type="text"
      placeholder="Search..."
      onChange={handleChange}
      value={searchText}
    />
  );
};

export default SearchBar;
