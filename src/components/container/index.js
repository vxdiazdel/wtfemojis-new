import React from "react";
import * as Styled from "./styled-components";

const Container = ({ maxWidth, children }) => (
  <Styled.Container maxWidth={maxWidth}>
    {children}
  </Styled.Container>
);

export default Container;
