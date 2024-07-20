import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
--primary-color: #8244FF;
--secondary-color: #16F8B6;
--accent-color: #F926AE;
--background-primary: #0D1224;
--body-text: #b8c1ec;
--border-radius: 5px;
--primary-font:  "Gabarito", sans-serif;

}

* {
padding: 0;
margin: 0;
}

html {
    font-size: 62.5%;
    scroll-behavior:smooth;
 }
 
 body {
 font-family: var(--primary-font);
    box-sizing: border-box;
    background-color: var(--background-primary);
 }

`;

// Typography

export const h1 = css`
  @media screen and (min-width: 768px) {
    font-size: 5rem;
  }
`;

export const secondaryHeading = css`
  font-weight: 700;
  font-size: 3rem;
`;

export const subHeading = css`
  color: var(--accent-color);
  line-height: 2.4rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  font-size: 1.9rem;

  @media screen and (min-width) {
    font-size: 2.1rem;
  }
`;

export const bodyText = css`
  font-size: 1.8rem;
  color: var(--body-text);
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 2.1rem;
  }
`;

export const ListItem = styled.li`
  font-size: 1.5rem;
  color: var(--body-text);
  text-transform: uppercase;
  transition: color 0.15s ease-in;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &.rotate {
    @media screen and (min-width: 1250px) {
      transform: rotate(-90deg);
    }
  }

  &.spacing {
    /* margin: 3rem 0; */
  }

  &.mobile {
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.9rem;
  }
`;

// Utils

export const separator = css`
  border-bottom: 1px solid rgba(211, 216, 232, 0.3);
`;

export const sectionBlock = css`
  min-height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 45%;
    right: 45%;
    box-shadow: #7a55ff 0px 0px 20rem 6rem;
  }
`;

export const grid1x2 = css`
  display: grid;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
