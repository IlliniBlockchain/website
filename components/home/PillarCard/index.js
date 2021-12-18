import React from 'react'
import StyledTitle from './StyledTitle'
import StyledDescription from './StyledDescription'
import PillarCardContainer from './PillarCardContainer'

const PillarCard = ({ title, description, pillar }) => (
  <PillarCardContainer
    style={{
			backgroundColor: (pillar === 'education') ? '#002855' : (pillar === 'community') ? '#ffffff' : '#e84a27',
			color: (pillar === 'community') ? '#202020' : '#ffffff',
		}}
  >
    <StyledTitle>{title}</StyledTitle>
    <StyledDescription>{description}</StyledDescription>
  </PillarCardContainer>
)

export default PillarCard