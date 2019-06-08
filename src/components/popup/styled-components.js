import styled, { css } from "styled-components";
import { rem, position } from "polished";
import { colors } from "../../styles";

const { white, teal, pink } = colors;

export const Popup = styled.div`
  background: ${({ hasError }) => hasError ? pink : teal};
  border-radius: ${rem(6)};
  color: ${white};
  opacity: ${({ hasError }) => hasError === null ? 0 : 1};
  padding: ${rem(10)};
  pointer-events: none;
  ${position('fixed', 'auto', rem(25), rem(25), 'auto')};
  ${({ hasError }) => 
    hasError === null 
    ? css`transform: translateX(${rem(10)}) scale(0.75);`
    : css`transform: translateX(0) scale(1);`
  };
  transition: all 0.2s ease-in-out;
  transform-origin: right;
`;

export const PopupText = styled.h4`
  line-height: 1.5;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  user-select: none;
`;