import styled from "styled-components";
import { rem } from "polished";

export const LoadingWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - ${rem(525)});
`;