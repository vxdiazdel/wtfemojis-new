import React, { useContext } from "react";
import { SearchContext } from "../../stores/search-context";
import * as Styled from "./styled-components";

const SearchBar = () => {
  const [searchText, setSearchText] = useContext(SearchContext);

  return (
    <Styled.Input
      type="text"
      placeholder="Search..."
      onChange={e => setSearchText(e.target.val)}
      value={searchText}
    />
  );
};

export default SearchBar;
