import React from "react";
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  Small,
  StyledFooter,
} from "../styles/Footer.styled";
import { animateScroll as scroll } from "react-scroll";

import {
  SiLinkedin,
  SiGithub,
  SiMinutemailer,
  SiTwitter,
} from "react-icons/si";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter id="contact">

      <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:calvinperez2003@gmail.com"
          data-hover="Let's talk!"
        >
          Need a developer?
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts>
        <FooterContact>
          <ContactHeader>Call me</ContactHeader>
          <ContactLink href="tel:9049932535">9049932535</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social</ContactHeader>{" "}
          <FooterSocials>
            <ContactLink
              href="https://github.com/cperez1703"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/calvin-perez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin />
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Mail</ContactHeader>
          <ContactLink href="mailto:calvinperez2003@gmail.com">
            calvinperez2003@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterLine />
      <div
        onClick={toTop}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "30px",
        }}
      >
        <BsFillArrowUpSquareFill
          style={{
            width: "40px",
            marginTop: "10px",
            cursor: "pointer",
            color: "white",
          }}
        />
        <a style={{ fontSize: "20px" }} onClick={toTop}>
          Go to top
        </a>
      </div>
    </StyledFooter>
  );
};

export default Contact;
