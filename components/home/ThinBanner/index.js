import React from 'react'
import { BannerBackground, BannerContainer, BannerHeader, BannerSubheader, BannerButton } from './ThinBannerStyles'
import Link from 'next/link'
const ThinBanner = ({ header, subtitle, buttonText, buttonLink}) => {

  return (
  <BannerBackground>
    <BannerContainer>
        <BannerHeader>{header}</BannerHeader>
        <BannerSubheader>
          {subtitle}
        </BannerSubheader>
    </BannerContainer>
    <Link href={buttonLink} passHref>
      <BannerButton target="_blank">{buttonText}</BannerButton>
    </Link>
  </BannerBackground>
  )
}
  
export default ThinBanner