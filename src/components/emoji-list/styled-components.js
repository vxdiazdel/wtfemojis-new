import styled from "styled-components";
import { rem } from "polished";

export const ListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${rem(150)}, 1fr));
  grid-gap: 20px;
  min-height: calc(100vh - ${rem(525)});
`;
