import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.title`
height: 42px;
background: #202020;
color: #ffffff; 
display: flex;
justify-content: center;
align-items: center;
`

const StyledDescription = styled.desc`
height: 24px;
background: #202020;
color: #ffffff; 
display: flex;
justify-content: left;
align-items: center;
`

const ProjectsCard = () => (
  <div style={{ color: '#002855' }}>
    <StyledTitle>Projects</StyledTitle>
    <StyledDescription>
        By building blockchain projects with VC firms, organizations, 
        and blockchain platforms Illini Blockchain provides members 
        with the unique opportunity to gain real world experience
        working at the forefront of a revolutionary industry
    </StyledDescription>
  </div>
)


export default ProjectsCard