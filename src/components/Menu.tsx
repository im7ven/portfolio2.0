import styled from "styled-components";
import SocialLinks from "./SocialLinks";

const MenuWrapper = styled.div`
  position: absolute;
  justify-content: space-between;
  top: 0;
  width: 100%;
  padding: 2.5rem 0;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <SocialLinks />
    </MenuWrapper>
  );
};

export default Menu;
