import React from "react";
import { IconContext } from "react-icons";
import {
  LinkName,
  ProjectCard,
  ProjectCodeLink,
  ProjectDetails,
  ProjectImage,
  ProjectLiveLink,
  ProjectTitle,
  ProjectTransitionImage,
} from "../styles/Projects.styled";

const ProjectCardComponent = ({
  image,
  transitionImage,
  title,
  codeLink,
  liveLink,
  techStack,
}) => {
  return (
    <>
      <IconContext.Provider value={{ size: "1rem" }}>
        <ProjectCard>
          <ProjectImage src={image} alt={title} />
          <ProjectTransitionImage src={transitionImage} alt={title} />
          <ProjectDetails>
            <ProjectTitle>{title}</ProjectTitle>
            {codeLink && (
              <ProjectCodeLink
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkName>Github</LinkName>
              </ProjectCodeLink>
            )}
            {liveLink && (
              <ProjectLiveLink
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkName>Live</LinkName>
              </ProjectLiveLink>
            )}
            <h4 style={{ marginTop: "10px" }}>Tech Stack</h4>
            <span style={{ display: "flex" }}>
              {techStack.map((el, index) => (
                <p key={index}>
                  {el}
                  {index < techStack.length - 1 && " || "}
                </p>
              ))}
            </span>
          </ProjectDetails>
        </ProjectCard>
      </IconContext.Provider>
    </>
  );
};

export default ProjectCardComponent;
