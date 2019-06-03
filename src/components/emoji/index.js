import React from "react";
import * as Styled from "./styled-components";

const Emoji = ({ data }) => (
  <Styled.EmojiWrap>
    <Styled.Emoji role="img" aria-label={data.name} title={data.name}>
      {data.emoji}
    </Styled.Emoji>
  </Styled.EmojiWrap>
);

export default Emoji;
