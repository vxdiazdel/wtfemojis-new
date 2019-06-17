import React from "react";
import * as Styled from "./styled-components";

const NotFound = () => (
  <Styled.NotFoundWrap>
    <h2>
      Oops! No emojis found{" "}
      <span role="img" aria-label="Crying Face">
        😢
      </span>
    </h2>
  </Styled.NotFoundWrap>
);

export default NotFound;
