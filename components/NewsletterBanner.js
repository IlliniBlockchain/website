import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
padding-left: 110px;
padding-bottom: 0px;
padding-top: 25px;
margin-bottom: 0px;
color: #ffffff; 
display: flex;
justify-content: left;
font-size: 48px;
`

const StyledDescription = styled.h3`
padding-left: 110px;
padding-bottom: 40px;
margin-top: 0px;
color: #ffffff; 
display: flex;
justify-content: left;
font-size: 24px;
font-weight: 400;
`

const CustomNewsletterBanner = styled.div`
background-color: #e84a27;
`

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