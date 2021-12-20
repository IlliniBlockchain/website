import Head from 'next/head'
import {Members} from '../components/about-us/AboutStyles'
import {
  SectionTitle,
  Container
} from '../components/shared-styled'
import {Member} from '../components/about-us'

export default function AboutUs() {
    return (
      <Container>
        <Head>t
          <title>About Us</title>
          <meta name="About Us - Illini Blockchain" content="About the Illini Blockchain Team" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <SectionTitle>Team</SectionTitle>
        <Members>
          <Member name="Zayyan Faizal" image="/headshots/zayyan_faizal.jpg"></Member>
          <Member name="Zayyan Faizal" image="/headshots/zayyan_faizal.jpg"></Member>
          <Member name="Zayyan Faizal" image="/headshots/zayyan_faizal.jpg"></Member>
          <Member name="Zayyan Faizal" image="/headshots/zayyan_faizal.jpg"></Member>
          <Member name="Zayyan Faizal" image="/headshots/zayyan_faizal.jpg"></Member>
        </Members>
      </Container>
    )
  }