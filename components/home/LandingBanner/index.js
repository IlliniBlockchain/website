import React from 'react'
import LandingHeader from './LandingHeader'
import LandingSubheader from './LandingSubheader'
import LandingContainer from './LandingContainer'
import LandingGradient from './LandingGradient'

const LandingBanner = () => (
  <LandingContainer>
    {/* <LandingGradient> */}
    <LandingHeader>Building UIUC's Blockchain Ecosystem</LandingHeader>
    <LandingSubheader>
      Illini Blockchain is the student-led hub for blockchain research, development, and collaboration
      at the University of Illinois
    </LandingSubheader>
    {/* </LandingGradient> */}
  </LandingContainer>
)


export default LandingBanner