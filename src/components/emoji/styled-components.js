import styled from "styled-components";
import { rem } from "polished";

export const EmojiWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: ${rem(4)};
  transition: 0.25s ease-in-out;
  height: auto;
  cursor: pointer;
  :hover {
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
      0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  }
`;

export const Emoji = styled.span`
  display: block;
  font-size: ${rem(80)};
  font-weight: normal;
  line-height: 1.5;
  transform: translateY(5px);
  font-family: "Apple Color Emoji", "Segoe UI Emoji", "NotoColorEmoji",
    "Segoe UI Symbol", "Android Emoji", "EmojiSymbols";
`;
