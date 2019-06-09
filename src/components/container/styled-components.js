import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.section`
  max-width: ${({ maxWidth }) => maxWidth ? rem(maxWidth) : rem(1200)};
  margin: ${rem(100)} auto;
  padding: 0 ${rem(16)};

  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`;