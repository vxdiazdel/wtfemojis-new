import React, { useContext } from 'react';
import { EmojiContext } from "../../stores/emoji-context";

const EmojiList = () => {
  const [emojis] = useContext(EmojiContext);

  return(
    <div>
      <pre>{JSON.stringify(emojis, null, 2)}</pre>
    </div>
  );
}

export default EmojiList;