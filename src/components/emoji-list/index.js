import React, { useContext } from "react";
import { EmojiContext } from "../../stores/emoji-context";
import { LoadingContext } from "../../stores/loading-context";
import Emoji from "../emoji";
import NotFound from "../not-found";
import Loader from "../loader";
import * as Styled from "./styled-components";

const EmojiList = () => {
  const [emojis] = useContext(EmojiContext);
  const [isLoading] = useContext(LoadingContext);
  const { filtered } = emojis;

  if (isLoading) return <Loader />;

  return (
    <Styled.ListWrap>
      {filtered.length ? (
        filtered.map(emoji => <Emoji key={emoji._id} data={emoji} />)
      ) : (
        <NotFound />
      )}
    </Styled.ListWrap>
  );
};

export default EmojiList;
