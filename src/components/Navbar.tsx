import styled from "styled-components";
import { ListItem } from "../styles.global";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";

const NavbarWrapper = styled.nav`
  display: none;
  // justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 0;
  box-sizing: border-box;
  z-index: 7;
  box-shadow: 0px 0px 0px 0.1px #cccdcd;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 2rem 3.5rem;
    margin: 0rem auto 0;
    justify-content: center;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 3rem;
  list-style: none;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: absolute;
  right: 1rem;

  @media screen and (min-width: 768px) {
    right: 3.5rem;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavList>
        <ListItem>Projects</ListItem>
        <ListItem>Skills</ListItem>
        <ListItem>Contact</ListItem>
      </NavList>
      <IconWrapper>
        <FaLinkedinIn size="28px" color="#fff" />
        <TbBrandGithubFilled size="28px" color="#fff" />
        <IoIosMail size="28px" color="#fff" />
      </IconWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
