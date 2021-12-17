import React from 'react'
import styled from 'styled-components'
import StyledTitle from './StyledTitle'
import StyledDescription from './StyledDescription'
import CustomNewsletterBanner from './CustomNewsletterBanner'

// const SubscribeButton = styled.button<ButtonComponentProps>`
//   padding: 5px 12px;
//   color: white;
//   font-size: 36px;
//   font-weight: 700;
//   background-color: ${{color: '#202020'}};
//   border: 0px;
//   border-radius: 3px;
//   appearance: none;
//   cursor: pointer;
// `;

const NewsletterBanner = () => (
    <CustomNewsletterBanner>
      <StyledTitle>Sign up for our newsletter!</StyledTitle>
      <StyledDescription>Receive the latest updates on everything Illini Blockchain</StyledDescription>
    </CustomNewsletterBanner>
  )
  
  
  export default NewsletterBanner