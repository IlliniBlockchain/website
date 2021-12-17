import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.title`
padding-top: 25px;
display: flex;
justify-content: center;
align-items: center;
font-size: 42px;
font-weight: bold;
`

const StyledDescription = styled.h4`
padding-left: 50px;
padding-right: 50px;
display: flex;
justify-content: center;
font-size: 24px;
font-weight: lighter;
`

const FlatCard = styled.div`
height: 400px;
width: 32%;
background-color: #e84a27;
border-radius: 25px;
float: left;
`

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