import { createGlobalStyle } from "styled-components";
import { rem } from "polished";
import { colors } from "../../styles";

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body {
    background: ${colors.white};
    margin: 0;
    padding: 0;
    color: ${colors.darkGrey};
    scroll-behavior: smooth;
    font-family: Helvetica, Arial, sans-serif;
    font-size: ${rem(16)};
  }
  a {
    text-decoration: none;
  }
`;
