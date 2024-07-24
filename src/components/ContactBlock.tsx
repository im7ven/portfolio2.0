import styled from "styled-components";
import { BlockHeading, bodyText, sectionBlock } from "../styles.global";
import AnimatedText from "./AnimatedText";
import ContactForm from "./ContactForm";
import FadeUp from "./FadeUp";

const ContactContainer = styled.section`
  ${sectionBlock}
  padding-bottom: 6rem;
`;

const ContactGrid = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 0 2.4rem;
`;

const ContactDetails = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-top: 3rem;
  max-width: 50rem;
  text-align: center;
`;

const ContactHeading = styled.h3`
  color: var(--accent-color);
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`;

const ContactMessage = styled.p`
  ${bodyText}
`;

const ContactBlock = () => {
  return (
    <ContactContainer>
      <BlockHeading>
        <AnimatedText text="Lets Connect" />
      </BlockHeading>
      <ContactGrid>
        <ContactDetails>
          <ContactHeading>
            <AnimatedText text="Get In Touch"></AnimatedText>
          </ContactHeading>
          <FadeUp>
            <ContactMessage>
              Let's collaborate and create something amazing together! I'm
              passionate about working with others, whether it's taking on
              exciting new projects, brainstorming innovative ideas, or simply
              having a chat about all things code. Feel free to reach out, and
              let's bring our ideas to life! Fill out the form or send me an
              email.
            </ContactMessage>
          </FadeUp>
        </ContactDetails>
        <ContactForm />
      </ContactGrid>
    </ContactContainer>
  );
};

export default ContactBlock;
