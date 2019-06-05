import React from "react";
import * as Styled from "./styled-components";

const Emoji = ({ data: { name, emoji } }) => (
  <Styled.EmojiWrap title={name}>
    <Styled.Emoji role="img" aria-label={name}>
      {emoji}
    </Styled.Emoji>
  </Styled.EmojiWrap>
);

export default Emoji;
