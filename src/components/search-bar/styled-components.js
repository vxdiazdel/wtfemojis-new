import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../styles";

export const Input = styled.input`
  padding: ${rem(8)};
  border-radius: ${rem(2)} ${rem(2)} 0 0;
  background: rgba(255, 255, 255, 0.1);
  color: ${colors.white};
  text-transform: uppercase;
  transition: 0.15s ease-in-out;
  border: none;
  height: 30px;
  width: 150px;
  font-size: ${rem(12)};
  letter-spacing: ${rem(.5)};
  :hover {
    background: rgba(255, 255, 255, 0.25);
  }
  ::placeholder {
    color: ${colors.white};
  }
  :focus {
    background: rgba(255, 255, 255, 0.25);
    outline: none;
    width: 180px;
  }
`;
