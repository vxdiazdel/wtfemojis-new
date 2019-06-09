import React from "react";
import Container from "../container";
import * as Styled from "./styled-components";

const Footer = () => (
  <Styled.Footer>
    <Container maxWidth={960}>
      <Styled.P>Copyright &copy;{new Date().getFullYear()} wtfEmojis</Styled.P>
      <Styled.P>
        All emoji names are official character and/or CLDR names and code
        points, listed as part of the Unicode Standard. Emoji character
        artwork and copyright belong to their respective font creators.
      </Styled.P>
    </Container>
  </Styled.Footer>
);

export default Footer;