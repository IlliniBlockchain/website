import React from 'react'
import NewsletterHeader from './NewsletterHeader'
import NewsletterSubheader from './NewsletterSubheader'
import NewsletterContainer from './NewsletterContainer'
import NewsletterBackground from './NewsletterBackground'

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
  <NewsletterBackground>
    <NewsletterContainer>
      <NewsletterHeader>Sign up for our newsletter!</NewsletterHeader>
      <NewsletterSubheader>Receive the latest updates on everything Illini Blockchain</NewsletterSubheader>
    </NewsletterContainer>
  </NewsletterBackground>
)
  
export default NewsletterBanner