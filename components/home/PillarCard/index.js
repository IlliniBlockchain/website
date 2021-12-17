import React from 'react'
import FlatCard from './FlatCard'
import StyledTitle from './StyledTitle'
import StyledDescription from './StyledDescription'

const PillarCard = ({ title, description, pillar }) => (
  <FlatCard
    style={{
			backgroundColor: (pillar === 'education') ? '#002855' : (pillar === 'community') ? '#ffffff' : '#e84a27',
			color: (pillar === 'community') ? '#202020' : '#ffffff',
		}}
  >
    <StyledTitle>{title}</StyledTitle>
    <StyledDescription>{description}</StyledDescription>
  </FlatCard>
)

export default PillarCard