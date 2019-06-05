import React from "react";
import SearchBar from "../search-bar";
import * as Styled from "./styled-components";

const Nav = () => (
  <Styled.Navbar>
    <Styled.NavContainer>
      <Styled.NavbarLeft>
        <a href="/">
          wtfEmojis
          <span role="img" aria-label="OK hand">
            👌
          </span>
        </a>
      </Styled.NavbarLeft>
      <SearchBar />
    </Styled.NavContainer>
  </Styled.Navbar>
);

export default Nav;
