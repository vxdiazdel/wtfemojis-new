import { createGlobalStyle } from "styled-components";
import { rem } from "polished";
import { colors } from "../../styles";

const { white, darkGrey } = colors;

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body {
    background: ${white};
    margin: 0;
    padding: ${rem(50)} 0 0 0;
    color: ${darkGrey};
    font-family: 'Varela Round', sans-serif;
    font-size: ${rem(16)};
  }
  a {
    text-decoration: none;
  }
`;
