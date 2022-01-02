import React from 'react'
import { NewsletterBackground, NewsletterContainer, NewsletterHeader, NewsletterSubheader } from './NewsletterStyles'
import EmailForm from '../../EmailForm'

const NewsletterBanner = () => {

  return (
  <NewsletterBackground>
    <NewsletterContainer>
        <NewsletterHeader>Sign up for our newsletter!</NewsletterHeader>
        <NewsletterSubheader>Receive the latest updates on everything Illini Blockchain</NewsletterSubheader>
    </NewsletterContainer>
    <EmailForm/>
  </NewsletterBackground>
  )
}
  
export default NewsletterBanner