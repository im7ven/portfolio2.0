import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  background-color: #0b0f1e;
`;

const FooterContent = styled.div`
  max-width: 70rem;
`;

const CopyRight = styled.p`
  font-size: 1.5rem;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CopyRight>
          &copy; {new Date().getFullYear()} Developed and Designed by Justin
          Alexander. All rights reserved.
        </CopyRight>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
