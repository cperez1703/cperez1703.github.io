import React from "react";

import { Name, StyledHome, Title } from "../styles/Home.styled";
import "./style.css";

import { IconContext } from "react-icons";
import { IoIosCall, IoMdMail } from "react-icons/io";
import {
  SiLinkedin,
  SiGithub,
  SiMinutemailer,
  SiTwitter,
  SiPhonepe,
} from "react-icons/si";

const Home = () => {
  let today = new Date(),
    hour = today.getHours();

  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Calvin Perez</Name>
        <Title>Computer Science Student</Title>
        <p>University of Florida Herbert Wertheim College of Engineering</p>
        <div id="contactdiv">
          <a
            href="https://github.com/cperez1703"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/calvin-perez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin />
          </a>

          <a href="tel:9049932535">
            <IoIosCall />
          </a>
          <a href="mailto:c.jay.perez1703@gmail.com">
            <IoMdMail />
          </a>
        </div>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
