import React from 'react'
import { ApplyBackground, ApplyContainer, ApplyHeader, ApplySubheader, ApplyButton } from './ApplyStyles'
import Link from 'next/link'
const ApplyBanner = () => {

  return (
  <ApplyBackground>
    <ApplyContainer>
        <ApplyHeader>Looking to join the team?</ApplyHeader>
        <ApplySubheader>Learn more about how you can join the team and the roles we are looking for!</ApplySubheader>
    </ApplyContainer>
    <Link href='https://www.notion.so/illiniblockchain/Spring-2022-Recruitment-ff8e4c8165c54840bda5a77e4e95edbe' passHref>
      <ApplyButton>Apply</ApplyButton>
    </Link>
  </ApplyBackground>
  )
}
  
export default ApplyBanner