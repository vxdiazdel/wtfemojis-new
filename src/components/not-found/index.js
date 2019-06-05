import React from "react";
import * as Styled from "./styled-components";

const NotFound = () => (
  <Styled.NotFoundWrap>
    <h3>
      Oops! No emojis found{" "}
      <span role="img" aria-label="Crying Face">
        😢
      </span>
    </h3>
  </Styled.NotFoundWrap>
);

export default NotFound;
