import React from 'react'
import PillarTitle from './PillarTitle'
import PillarDescription from './PillarDescription'
import PillarCardContainer from './PillarCardContainer'

const PillarCard = ({ title, description, pillar }) => (
  <PillarCardContainer
    style={{
			backgroundColor: (pillar === 'education') ? 'var(--navy-blue)' : (pillar === 'community') ? 'var(--white)' : 'var(--orange)',
			color: (pillar === 'community') ? 'var(--dark-text-color)' : 'var(--light-text-color)',
		}}
  >
    <PillarTitle>{title}</PillarTitle>
    <PillarDescription>{description}</PillarDescription>
  </PillarCardContainer>
)

export default PillarCard