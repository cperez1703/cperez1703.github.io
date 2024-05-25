import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/boba.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true">About Me</SectionTitle>
      </SectionHeading>

      <AboutContent>
        <AboutImage src={myImage} />
        <AboutDetailsContainer>
          <StyledParagraph>
          Hello, I'm Calvin Perez, a dedicated Computer Science student with a passion
          for coding and technology. My journey in the world of computer science is
          driven by a relentless pursuit of knowledge and a commitment to excellence.
          </StyledParagraph>
          <StyledParagraph>
          I pride myself on being open-minded, always eager to learn and adapt in 
          a rapidly evolving field. This mindset not only helps me stay current with
          the latest technological advancements but also enables me to approach
          problems from various angles, leading to more effective and creative solutions.
          </StyledParagraph>
          <StyledParagraph>
            Thank you for visiting my website. I look forward to connecting with you 
            and exploring the endless possibilities that the world of technology has to offer.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              download="Calvin_Perez"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target={"_blank"}
              icon={downloadIcon}
            >
              View Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
