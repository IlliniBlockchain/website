import React from "react";
import {
  NewsletterBackground,
  NewsletterContainer,
  NewsletterHeader,
  NewsletterSubheader,
  NewsletterButton,
  NewsletterFlex,
} from "./NewsletterStyles";
import EmailForm from "../../EmailForm";
import Link from "next/link";
const NewsletterBanner = () => {
  return (
    <NewsletterBackground>
      <NewsletterFlex>
        <NewsletterContainer>
          <NewsletterHeader>Sign up for our newsletter!</NewsletterHeader>
          <NewsletterSubheader>
            Receive the latest updates on everything Illini Blockchain
          </NewsletterSubheader>
        </NewsletterContainer>
        <Link href="https://forms.gle/TisDoiaNfD2ZoRes8" passHref>
          <NewsletterButton>Signup</NewsletterButton>
        </Link>
      </NewsletterFlex>
      {/* TODO: Fix Netlify Forms */}
      {/* <EmailForm/> */}
    </NewsletterBackground>
  );
};

export default NewsletterBanner;
