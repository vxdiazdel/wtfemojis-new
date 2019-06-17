import React from "react";
import * as Styled from "./styled-components";

const Loader = () => (
  <Styled.LoadingWrap>
    <h2>
      Loading...{" "}
      <span role="img" aria-label="Upside down face">🙃</span>
    </h2>
  </Styled.LoadingWrap>
);

export default Loader;