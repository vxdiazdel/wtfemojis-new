import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.main`
  max-width: 1200px;
  margin: 100px auto;
  padding: 0 ${rem(16)};

  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`;