import React, { useContext, useState, useEffect, useRef } from 'react';
import { ErrorContext } from '../../stores/error-context';
import * as Styled from './styled-components';

const Emoji = ({ data: { name, emoji, _id } }) => {
  const [, setError] = useContext(ErrorContext);
  const [currentEmoji, setCurrentEmoji] = useState(null);
  const timer = useRef();

  const copyToClipboard = async el => {
    setError(null);
    setCurrentEmoji(el);
    clearInterval(timer.current);

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(el);
      setError(false);

      timer.current = setTimeout(() => {
        setError(null);
      }, 1250);
      return timer.current;
    }

    const emoji = document.getElementById(_id).firstChild;
    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(emoji);
    selection.removeAllRanges();
    selection.addRange(range);

    if (document.execCommand('copy')) {
      selection.removeAllRanges();
      setError(false);
    } else {
      setError(true);
    }

    timer.current = setTimeout(() => {
      setError(null);
    }, 1250);
    return timer.current;
  };

  const handleKeyPress = (e, emoji) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      copyToClipboard(emoji);
    }
  };

  useEffect(() => {
    if (currentEmoji) document.title = `wtfEmojis ${currentEmoji}`;
  }, [currentEmoji]);

  return (
    <Styled.EmojiWrap
      title={name}
      id={_id}
      onClick={() => copyToClipboard(emoji)}
      onKeyPress={e => handleKeyPress(e, emoji)}
      tabIndex="0"
    >
      <Styled.Emoji role="img" aria-label={name}>
        {emoji}
      </Styled.Emoji>
    </Styled.EmojiWrap>
  );
};

export default Emoji;
