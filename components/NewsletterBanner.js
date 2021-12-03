import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.title`
height: 48px;
background: #202020;
color: #ffffff; 
display: flex;
justify-content: center;
align-items: center;
`

const StyledDescription = styled.desc`
height: 24px;
background: #202020;
color: #ffffff; 
display: flex;
justify-content: left;
align-items: center;
`

const SubscribeButton = styled.button<ButtonComponentProps>`
  padding: 5px 12px;
  color: white;
  font-size: 36px;
  font-weight: 700;
  background-color: ${{color: '#202020'}};
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
`;

const NewsletterBanner = () => (
    <div style={{ color: '#e84a27' }}>
      <StyledTitle>Sign up for our newsletter!</StyledTitle>
      <div><StyledDescription>Receive the latest updates on everything Illini Blockchain</StyledDescription></div>
      
      <SubscribeButton />
    </div>
  )
  
  
  export default NewsletterBanner