import React from 'react'
import { ApplyBackground, ApplyContainer, ApplyHeader, ApplySubheader, ApplyButton } from './ApplyStyles'
import Link from 'next/link'
const ApplyBanner = () => {

  return (
  <ApplyBackground>
    <ApplyContainer>
        <ApplyHeader>We're recruiting for fall 2022!</ApplyHeader>
        <ApplySubheader>
          We're looking for developers, researchers, and designers to join us this upcoming semester!
        </ApplySubheader>
    </ApplyContainer>
    <Link href='https://www.notion.so/illiniblockchain/Fall-2022-Recruitment-ff8e4c8165c54840bda5a77e4e95edbe' passHref>
      <ApplyButton target="_blank">Learn more here</ApplyButton>
    </Link>
  </ApplyBackground>
  )
}
  
export default ApplyBanner