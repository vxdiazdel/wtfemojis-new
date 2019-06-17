import styled from "styled-components";
import { rem } from "polished";

export const Emoji = styled.span`
  cursor: pointer;
  display: block;
  font-size: ${rem(80)};
  font-weight: normal;
  line-height: 1.5;
  transform: translateY(5px);
  font-family: "Apple Color Emoji", "Segoe UI Emoji", "NotoColorEmoji",
    "Segoe UI Symbol", "Android Emoji", "EmojiSymbols";
  transition: 0.25s ease-in-out;

  :hover {
    filter: 
      drop-shadow(0 4px 5px rgba(0, 0, 0, 0.12))
      drop-shadow(0 1px 10px rgba(0, 0, 0, 0.14))
      drop-shadow(0 2px 4px rgba(0, 0, 0, 0.12))
	    drop-shadow(0 -1px 3px rgba(0, 0, 0, 0.1));
  }
`;

export const EmojiWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: ${rem(4)};
  transition: 0.25s ease-in-out;
  height: auto;
`;