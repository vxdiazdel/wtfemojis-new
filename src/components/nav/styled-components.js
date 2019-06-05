import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../styles";

export const Navbar = styled.nav`
  height: 50px;
  background: ${colors.periwinkle};
  padding: 0 ${rem(16)};
`;

export const NavContainer = styled.div`
  height: inherit;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLeft = styled.div`
  a {
    color: white;
    font-size: ${rem(24)};
  }
`;