import React from "react";
import Nav from "../nav";
import Container from "../container";
import EmojiList from "../emoji-list";
import Store from "../../stores";
import GlobalStyle from "./styles";

const App = () => {
  return (
    <Store>
      <GlobalStyle />
      <Nav />
      <Container>
        <EmojiList />
      </Container>
    </Store>
  );
};

export default App;
