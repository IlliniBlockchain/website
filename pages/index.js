import Head from 'next/head'
import {
  HomeContainer,
  LandingBanner,
  PartnerBanner,
  Pillars,
  ThinBanner,
  People
} from "../components/home";
const recruitment = false; // change in GlobalStyle.js as well


export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Illini Blockchain</title>
        <meta name="description" content="University of Illinois' premier student blockchain organization,
                    serving campus through education, community, and projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingBanner />

      <PartnerBanner
        partnerLogoPaths={[
          '/partnerLogos/solanaLogo.png',
          '/partnerLogos/nearLogo.png',
          '/partnerLogos/binanceLogo.png',
          '/partnerLogos/bafLogo.png'
        ]}
      />
      
      {recruitment
        ?
        <>
          <ThinBanner
            header="We are recruiting for fall 2022!"
            subtitle="We are looking for developers, researchers, and designers to join us this upcoming semester!"
            buttonText="Learn more here"
            buttonLink="https://www.notion.so/illiniblockchain/Fall-2022-Recruitment-ff8e4c8165c54840bda5a77e4e95edbe"
          />
          <Pillars />
          <People />
          <ThinBanner
            header="Sign up for our newsletter!"
            subtitle="Receive the latest updates on everything Illini Blockchain"
            buttonText="Sign up"
            buttonLink="https://forms.gle/TisDoiaNfD2ZoRes8"
          />
        </>
        :
        <>
          <ThinBanner
            header="Sign up for our newsletter!"
            subtitle="Receive the latest updates on everything Illini Blockchain"
            buttonText="Sign up"
            buttonLink="https://ibupdates.substack.com/"
          />
          <Pillars />
          <People />
        </>
      }

    </HomeContainer>
  )
}
