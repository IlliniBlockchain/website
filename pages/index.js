import Head from 'next/head'
import {
  NewsletterBanner,
  LandingBanner,
  Pillars,
  ApplyBanner,
} from "../components/home";
const recruitment = false; // change in GlobalStyle.js as well

export default function Home() {
  return (
    <div>
      <Head>
        <title>Illini Blockchain</title>
        <meta name="description" content="University of Illinois' premier student blockchain organization,
                    serving campus through education, community, and projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingBanner />
      
      {recruitment
        ?
        <>
          <ApplyBanner/>
          <Pillars />
          <NewsletterBanner/> 
        </>
        :
        <>
          <NewsletterBanner/> 
          <Pillars />
        </>
      }

    </div>
  )
}
