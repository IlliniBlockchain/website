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
          <Member name="Zayyan Faizal" image="/headshots/zayyan_faizal.jpg" twitter="brownmanwonders" linkedinURL="https://www.linkedin.com/in/zayyanfaizal" />
          <Member name="Luke Clancy" image="/headshots/luke_clancy.jpg" twitter="luke_clancy1" linkedinURL="https://www.linkedin.com/in/luke-clancy-a88812191/"/>
          <Member name="Alec Chen" image="/headshots/alec_chen.png" twitter="alecchendev" linkedinURL="https://www.linkedin.com/in/alecchendev/"/>
          <Member name="Danny Koch" image="/headshots/alec_chen.png" twitter="Danny_Koch13" linkedinURL="https://www.linkedin.com/in/dannykoch/"/>
          <Member name="Amaan Sameer" image="/headshots/amaan_sameer.jpg" twitter="AmaanSameer3" linkedinURL="https://www.linkedin.com/in/amaan-sameer-68917a180/"/>
          <Member name="Zhengyu Li" image="/headshots/zhengyu_li.png" twitter="Zhengyu76252961" linkedinURL="https://www.linkedin.com/in/zhengyu-li-588391125/"/>
          <Member name="Rohan Bindu" image="/headshots/rohan_bindu.jpg" twitter="romoney0" linkedinURL="https://www.linkedin.com/in/rohan-bindu/"/>
          <Member name="Adrian Petrikiw" image="/headshots/rohan_bindu.jpg" twitter="petrykiw" linkedinURL="https://www.linkedin.com/in/adrianpetrykiw/"/>
          <Member name="Varun Siva" image="/headshots/rohan_bindu.jpg" twitter="VarunSiva14"/>

        </Members>
      </Container>
    )
  }