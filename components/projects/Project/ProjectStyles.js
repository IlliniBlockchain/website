import styled from "styled-components";

const ProjectTitle = styled.h2`
  font-size: 1.75rem;
  width: fit-content;
  padding: 20px 25px;
  border-radius: 10px;
  text-align: left;
  background-color: var(--orange);
`;

const ProjectStackLinksDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const ProjectStackLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const ProjectStack = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin: 0;
    margin-right: 10px;
    color: var(--light-text-color);
    border-radius: 10px;
    padding: 10px 15px 5px 15px;
    background-color: var(--navy-blue);
    vertical-align: middle;
  }
`;

const ProjectLinks = styled.div`
  color: var(--dark-text-color);
  font-size: 2rem;
  * {
    margin-left: 10px;
  }
`;

const ProjectImage = styled.div`
  width: 30%;
  height: fit-content;
  margin-right: 50px;
  border-radius: 10px;
  border: solid black 1px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  @media only screen and (max-width: calc(850px)) {
    margin: auto;
    width: 100%;
    margin-bottom: 25px;
  }
`;

const ProjectDescription = styled.p`
  margin: 0;
  font-size: 1.25rem;
  color: var(--dark-text-color);
  padding-bottom: 20px;

  @media only screen and (max-width: calc(850px)) {
    margin-bottom: 25px;
  }
`;

const ProjectContent = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  padding: 50px;
  @media only screen and (max-width: calc(850px)) {
    flex-direction: column;
  }
`;

const ProjectContainer = styled.div`
  margin-bottom: 50px;
  margin: auto;

  @media only screen and (max-width: calc(850px)) {
    width: 90%;
  }
`;

export {
  ProjectContainer,
  ProjectContent,
  ProjectDescription,
  ProjectImage,
  ProjectLinks,
  ProjectStack,
  ProjectStackLinks,
  ProjectStackLinksDescription,
  ProjectTitle,
};
