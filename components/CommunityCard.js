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

const CommunityCard = () => (
  <div style={{ color: '#ffffff' }}>
    <StyledTitle>Education</StyledTitle>
    <StyledDescription>
      Through a collection of medium articles, twitter posts, 
      notion pages, and educational blockchain events 
      Illini Blockchain educates people of all skill levels.
    </StyledDescription>
  </div>
)


export default CommunityCard