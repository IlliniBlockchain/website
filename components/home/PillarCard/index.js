import React from 'react'
import {PillarTitle, PillarDescription, PillarCardContainer, PillarButton} from './PillarStyles'
import Link from 'next/link'

const PillarCard = ({ title, description, pillar, icon, cta, link }) => (
  
  <PillarCardContainer
    style={{
			backgroundColor: (pillar === 'education') ? 'var(--navy-blue)' : (pillar === 'community') ? 'var(--white)' : 'var(--orange)',
			color: (pillar === 'community') ? 'var(--dark-text-color)' : 'var(--light-text-color)',
		}}
  >
    <PillarTitle>{title}</PillarTitle>
    <div style={{fontSize:"4vmax"}}>{icon}</div>
    <PillarDescription>{description}</PillarDescription>
    <Link href={link}>
      <PillarButton>{cta}</PillarButton>
    </Link>
  </PillarCardContainer>
)

export default PillarCard