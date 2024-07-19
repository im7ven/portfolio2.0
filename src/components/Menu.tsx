import { BiMenuAltRight } from "react-icons/bi";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";
import {
  motion,
  AnimatePresence,
  easeIn,
  easeInOut,
  easeOut,
} from "framer-motion";
import { useState } from "react";
import { ListItem } from "../styles.global";

const MenuWrapper = styled.div`
  position: absolute;
  align-items: center;
  top: 0;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled(BiMenuAltRight)`
  font-size: 35px;
  color: #fff;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MenuList = styled(motion.ul)`
  border-radius: 10px;
  background: red;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 1.5rem;
  position: relative;
  z-index: 77;
  max-width: 15rem;
  background: var(--accent-color);
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

  &::before {
    content: "";
    position: absolute;
    top: -13px;
    left: 15px;
    border: 8px solid;
    border-style: solid;
    border-color: transparent transparent var(--accent-color) transparent;
  }
`;

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <MenuWrapper>
      <SocialLinks />
      <motion.div>
        <MenuIcon onClick={toggleMenu} />
      </motion.div>
      <AnimatePresence>
        {isVisible && (
          <MenuList
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: "20rem", opacity: 1 }}
            exit={{ maxHeight: 0 }}
            transition={{ duration: 0.25, ease: easeIn }}
          >
            <ListItem className="mobile">Projects</ListItem>
            <ListItem className="mobile">Skills</ListItem>
            <ListItem className="mobile">Contacts</ListItem>
          </MenuList>
        )}
      </AnimatePresence>
    </MenuWrapper>
  );
};

export default Menu;
