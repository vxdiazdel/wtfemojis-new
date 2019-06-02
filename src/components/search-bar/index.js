import React, { useState } from "react";
import * as Styled from './styled-components';

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState('');
  return (
    <>
      <Styled.Input 
        type="text" 
        placeholder="Search..." 
        onChange={(e) => setSearchVal(e.target.val)}
        value={searchVal}
      />
    </>
  );
};

export default SearchBar;
