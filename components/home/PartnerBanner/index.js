import React from 'react'
import Image from 'next/image'
import { PartnerContainer, PartnerLogoContainer, PartnerLogoWrapper } from './PartnerStyles'
import { SectionTitle } from '../../shared-styled'


const PartnerBanner = ({ partnerLogoPaths }) => (
  <PartnerContainer>
  <SectionTitle>
    Powered By
  </SectionTitle>
  <PartnerLogoContainer>
    {
      partnerLogoPaths.map((partnerLogoPath, i) => (
        <PartnerLogoWrapper key={i} >
          <Image src={partnerLogoPath} layout="fill" objectFit='contain'/>
        </PartnerLogoWrapper>
      ))
    }

  </PartnerLogoContainer>

  </PartnerContainer>
)


export default PartnerBanner