import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";
import { ListItem } from "../styles.global";
import ProgressFadeIn from "./ProgressFadeIn";
import SocialLinks from "./SocialLinks";

const NavbarWrapper = styled(motion.nav)`
  display: none;
  justify-content: center;
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

  @media screen and (min-width: 1250px) {
    padding: 2rem 3.5rem;
    position: fixed;
    width: 3rem;
    min-height: 100vh;
    left: 0;
    align-items: start;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;

  @media screen and (min-width: 1250px) {
    gap: 8rem;
    flex-direction: column;
    align-items: center;
  }
`;

const PlaceHolder = styled.span`
  opacity: 0.1;
`;

const Navbar = () => {
  const navLinks: ReactNode[] = [
    <PlaceHolder>|</PlaceHolder>,
    <ListItem className="rotate">Projects</ListItem>,
    <ListItem className="spacing rotate">Skills</ListItem>,
    <ListItem className="rotate">Contact</ListItem>,
  ];

  return (
    <NavbarWrapper>
      <SocialLinks />
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
    </NavbarWrapper>
  );
};

export default Navbar;
