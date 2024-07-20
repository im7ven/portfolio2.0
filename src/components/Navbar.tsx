import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";
import { ListItem } from "../styles.global";
import ProgressFadeIn from "./ProgressFadeIn";
import SocialLinks from "./SocialLinks";
const NavbarWrapper = styled(motion.nav)`
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
  // gap: 3rem;
  list-style: none;
`;

const PlaceHolder = styled.span`
  opacity: 0.1;
`;

const Navbar = () => {
  const navLinks: ReactNode[] = [
    <PlaceHolder>|</PlaceHolder>,
    <ListItem>Projects</ListItem>,
    <ListItem className="spacing">Skills</ListItem>,
    <ListItem>Contact</ListItem>,
  ];

  return (
    <NavbarWrapper>
      <NavList>
        {navLinks.map((link, index) => (
          <ProgressFadeIn
            key={index}
            index={index}
            initial={index === 0 ? "" : "initial"}
          >
            {link}
          </ProgressFadeIn>
        ))}
      </NavList>
      <SocialLinks />
    </NavbarWrapper>
  );
};

export default Navbar;
