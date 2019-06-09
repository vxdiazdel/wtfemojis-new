import React from "react";
import SearchBar from "../search-bar";
import * as Styled from "./styled-components";

const Nav = () => {
  const scrollToTop = e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <Styled.Navbar>
      <Styled.NavContainer>
        <Styled.NavbarLeft onClick={scrollToTop}>
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
};

export default Nav;
