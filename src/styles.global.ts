import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
--primary-color: #8244FF;
--secondary-color: #16F8B6;
--accent-color: #F926AE;
--background-primary: #0D1224;
--body-text: #b8c1ec;
--border-radius: 8px;

}

html {
    font-size: 62.5%;
    scroll-behavior:smooth;
 }
 
 body {
    margin:0;
    padding: 0;
    box-sizing: border-box;
 }

`;

// Typography

const h1 = css`
  font-size: 3rem;

  @media screen and (min-width: 768px) {
    font-size: 5rem;
  }
`;

const bodyText = styled.p`
  font-size: 1.8rem;
  color: var(--body-text);
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 2.1rem;
  }
`;
