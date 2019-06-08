import React, { useContext } from "react";
import { ErrorContext } from "../../stores/error-context";
import * as Styled from "./styled-components";

const Emoji = ({ data: { name, emoji, _id } }) => {
  const [, setError] = useContext(ErrorContext);

  const copyToClipboard = async el => {
    setError(null);

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(el);
      setError(false);

      return setTimeout(() => {
        setError(null);
      }, 1250);
    }

    const emoji = document.getElementById(_id).firstChild;
    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(emoji);
    selection.removeAllRanges();
    selection.addRange(range);

    if (document.execCommand("copy")) {
      selection.removeAllRanges();
      setError(false);
    } else {
      setError(true);
    }

    return setTimeout(() => {
      setError(null);
    }, 1250);
  };

  return (
    <Styled.EmojiWrap
      title={name}
      id={_id}
      onClick={() => copyToClipboard(emoji)}
    >
      <Styled.Emoji role="img" aria-label={name}>
        {emoji}
      </Styled.Emoji>
    </Styled.EmojiWrap>
  );
};

export default Emoji;
