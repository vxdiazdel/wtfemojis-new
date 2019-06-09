import styled from "styled-components";
import { rem } from "polished";

export const NotFoundWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - ${rem(525)});
`;

export const EmojiWrap = styled.span`
  font-size: ${rem(36)};
`;
