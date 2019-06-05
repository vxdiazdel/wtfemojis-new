import { createGlobalStyle } from "styled-components";
import { rem } from "polished";
import { colors } from "../../styles";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');
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
    font-family: 'Varela Round', sans-serif;
    font-size: ${rem(16)};
    margin-top: 50px;
  }
  a {
    text-decoration: none;
  }
`;
