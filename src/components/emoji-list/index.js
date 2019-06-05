import React, { useContext } from "react";
import { EmojiContext } from "../../stores/emoji-context";
import Emoji from "../emoji";
import * as Styled from "./styled-components";

const EmojiList = () => {
  const [emojis] = useContext(EmojiContext);
  const { filtered } = emojis;

  return (
    <Styled.ListWrap>
      { 
        filtered.length ?
        filtered.map(emoji => (
          <Emoji key={emoji._id} data={emoji}/>
        )) : 'Oops...'
      }
    </Styled.ListWrap>
  );
};

export default EmojiList;
