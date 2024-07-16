import styled from "styled-components";
import { ListItem } from "../styles.global";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  margin: 2rem auto 0;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 7;
  box-shadow: 0 0px 5px 10px rgba(0, 0, 0, 0.1);
  background: inherit;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 3rem 3.5rem;
    margin: 4rem auto 0;
  }
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;
  list-style: none;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavList>
        <ListItem>Projects</ListItem>
        <ListItem>Skills</ListItem>
        <ListItem>Contact</ListItem>
      </NavList>
    </NavbarWrapper>
  );
};

export default Navbar;
