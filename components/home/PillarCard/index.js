import React from 'react'
import {PillarTitle, PillarDescription, PillarCardContainer, PillarButton, PillarIcon} from './PillarStyles'
import Link from 'next/link'

const PillarCard = ({ title, description, pillar, icon, cta, link }) => (
  
  <PillarCardContainer
    style={{
			backgroundColor: (pillar === 'education') ? 'var(--navy-blue)' : (pillar === 'community') ? 'var(--white)' : 'var(--orange)',
			color: (pillar === 'community') ? 'var(--dark-text-color)' : 'var(--light-text-color)',
		}}
  >
    <PillarTitle>{title}</PillarTitle>
    <PillarIcon>{icon}</PillarIcon>
    <PillarDescription>{description}</PillarDescription>
    <Link href={link} passHref>
      <PillarButton target="_blank">{cta}</PillarButton>
    </Link>
  </PillarCardContainer>
)

export default PillarCard