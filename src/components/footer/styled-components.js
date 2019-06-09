import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../styles";

const { white, periwinkle } = colors;

export const Footer = styled.footer`
  background-color: ${periwinkle};
  color: ${white};
  padding: ${rem(10)};
  text-align: center;
`;

export const P = styled.p`
  font-size: ${rem(12)};
  & + & {
    margin-top: ${rem(15)};
  }
`;