import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.title`
padding-top: 25px;
color: #ffffff; 
display: flex;
justify-content: center;
align-items: center;
font-size: 42px;
font-weight: bold;
`

const StyledDescription = styled.h4`
padding-left: 50px;
padding-right: 50px;
color: #ffffff; 
display: flex;
justify-content: center;
font-size: 24px;
font-weight: lighter;
`

const StyledSection = styled.div`
height: 300pt;
width: 300pt;
margin-right: 100px;
background-color: #e84a27;
border-radius: 25px;
float: left;
`

const ProjectsCard = () => (
  <StyledSection>
    <StyledTitle>Projects</StyledTitle>
    <StyledDescription>
      Through a collection of medium articles, twitter posts, 
      notion pages, and educational blockchain events 
      Illini Blockchain educates people of all skill levels.
    </StyledDescription>
  </StyledSection>
)


export default ProjectsCard