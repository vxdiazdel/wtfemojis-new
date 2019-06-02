import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../styles';

export const Input = styled.input`
  padding: ${rem(8)};
  border-radius: ${rem(2)} ${rem(2)} 0 0;
  background: rgba(255, 255, 255, 0.1);
  color: ${colors.white};
  text-transform: uppercase;
  transition: .15s ease-in-out;
  border-style: solid;
  border-color: ${colors.white};
  border-width: 0 0 ${rem(1)} 0;
  height: 40px;
  width: 150px;
  ::placeholder {
    color: ${colors.white};
  }
  :focus {
    background: rgba(255, 255, 255, 0.25);
    outline: none;
    width: 200px;
  }
`;