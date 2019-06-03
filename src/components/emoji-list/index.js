import React, { useContext } from "react";
import { EmojiContext } from "../../stores/emoji-context";
import Emoji from "../emoji";
import * as Styled from "./styled-components";

const EmojiList = () => {
  const [emojis] = useContext(EmojiContext);

  return (
    <Styled.ListWrap>
      {emojis.map(emoji => (
        <Emoji key={emoji._id} data={emoji}/>
      ))}
    </Styled.ListWrap>
  );
};

export default EmojiList;
