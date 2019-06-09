import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../styles";

export const Navbar = styled.nav`
  height: ${rem(50)};
  background: ${colors.periwinkle};
  padding: 0 ${rem(16)};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
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