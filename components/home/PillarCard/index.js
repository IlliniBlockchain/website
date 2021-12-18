import React from 'react'
import PillarTitle from './PillarTitle'
import PillarDescription from './PillarDescription'
import PillarCardContainer from './PillarCardContainer'

const PillarCard = ({ title, description, pillar }) => (
  <PillarCardContainer
    style={{
			backgroundColor: (pillar === 'education') ? '#002855' : (pillar === 'community') ? '#ffffff' : '#e84a27',
			color: (pillar === 'community') ? '#202020' : '#ffffff',
		}}
  >
    <PillarTitle>{title}</PillarTitle>
    <PillarDescription>{description}</PillarDescription>
  </PillarCardContainer>
)

export default PillarCard