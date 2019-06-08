import React from "react";
import Nav from "../nav";
import Container from "../container";
import EmojiList from "../emoji-list";
import Store from "../../stores";
import Popup from "../popup";
import GlobalStyle from "./styles";

const App = () => {
  return (
    <Store>
      <GlobalStyle />
      <Nav />
      <Container>
        <EmojiList />
      </Container>
      <Popup />
    </Store>
  );
};

export default App;
