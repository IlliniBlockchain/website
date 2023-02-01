import Head from "next/head";
import {
  MembersContainer,
  SectionTitle,
  Container,
} from "../components/shared-styled";
import { Member } from "../components/about-us";
import InfoBanner from "../components/about-us/InfoBanner";

export default function AboutUs() {
  return (
    <Container>
      <Head>
        <title>About Us</title>
        <meta
          name="About Us - Illini Blockchain"
          content="About the Illini Blockchain Team"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InfoBanner></InfoBanner>
      <SectionTitle>Team</SectionTitle>
      <MembersContainer>
        <Member
          name="Luke Clancy"
          image="/headshots/luke_clancy.jpg"
          twitter="luke_clancy1"
          linkedinURL="https://www.linkedin.com/in/luke-clancy-a88812191/"
        />
        <Member
          name="Alec Chen"
          image="/headshots/alec_chen.jpeg"
          twitter="alecchendev"
          linkedinURL="https://www.linkedin.com/in/alecchendev/"
        />
        <Member
          name="Danny Koch"
          image="/headshots/danny_koch.jpeg"
          twitter="Danny_Koch13"
          linkedinURL="https://www.linkedin.com/in/dannykoch/"
        />
        <Member
          name="Amaan Sameer"
          image="/headshots/amaan_sameer.jpg"
          twitter="AmaanSameer3"
          linkedinURL="https://www.linkedin.com/in/amaan-sameer-68917a180/"
        />
        <Member
          name="Rohan Hirani"
          image="/headshots/rohan_hirani.jpeg"
          twitter="rohan_hirani7"
          linkedinURL="https://linkedin.com/in/rohan-hirani"
        />
        <Member
          name="Varun Siva"
          image="/headshots/varun_siva.jpg"
          twitter="VarunSiva14"
          linkedinURL="https://www.linkedin.com/in/varun-siva-b6275b22a"
        />
        <Member
          name="Arman Rafati"
          image="/headshots/arman_rafati.jpg"
          twitter=""
          linkedinURL="https://www.linkedin.com/in/armanrafati/"
        />
        <Member
          name="Muskan Bhatla"
          image="/headshots/muskan_bhatla.jpg"
          twitter="https://twitter.com/muskanbhatla"
          linkedinURL="www.linkedin.com/in/muskanbhatla"
        />
        <Member
          name="Kevin Zhang"
          image="/headshots/kevin_zhang.jpg"
          twitter="https://twitter.com/bloobearr"
          linkedinURL="https://www.linkedin.com/in/kevnzhang/"
        />
        <Member
          name="Joe Morgan"
          image="/headshots/joe_morgan.jpg"
          twitter="https://twitter.com/_Bok_Choy"
          linkedinURL="https://www.linkedin.com/in/joe-morgan-03293521a/"
        />
        <Member
          name="Javier Nieto"
          image="/headshots/javier_nieto.jpg"
          twitter=""
          linkedinURL="https://www.linkedin.com/in/javier-m-nieto/"
        />
        <Member
          name="Larry Peng"
          image="/headshots/larry_peng.png"
          twitter=""
          linkedinURL="https://www.linkedin.com/in/larrylp2/"
        />
        <Member
          name="Jongwon Park"
          image="/headshots/jongwon_park.jpg"
          twitter="https://twitter.com/jwpark02"
          linkedinURL="https://linkedin.com/in/jongwonpark"
        />
        <Member
          name="Aniketh Chedalla"
          image="/headshots/aniketh.jpg"
          twitter=""
          linkedinURL="https://www.linkedin.com/in/aniketh-chedalla-9b33221b0/"
        />
        <Member
          name="Zach Bottoms"
          image="/headshots/zach_bottoms.jpg"
          twitter=""
          linkedinURL="https://www.linkedin.com/in/zach-bottoms-1130341ba/"
        />

        <Member
          name="Antony Silvetti-Schmitt"
          image="/headshots/antonysilvettischmitt.jpg"
          twitter="https://twitter.com/Johann_Antony"
          linkedinURL="https://www.linkedin.com/in/antony-silvetti-schmitt/"
          />
        <Member
          name="Sam Madhan"
          image="/headshots/sam_madhan.jpg"
          twitter=""
          linkedinURL="https://www.linkedin.com/in/saumya-madhan-a256831a2/"
        />
        <Member
          name="Samir Sheikh"
          image="/headshots/samir_sheikh.png"
          twitter=""
          linkedinURL="https://www.linkedin.com/in/samirksheikh/"
        />
        <Member
          name="Manas Gandhi"
          image="/headshots/manas.jpg"
          twitter=""
          linkedinURL="https://www.linkedin.com/in/manas-gandhi-358827199/"
        />
        <Member
          name="Kevin Choe"
          image="/headshots/kcho.jpg"
          twitter=""
          linkedinURL="https://www.linkedin.com/in/kevinchoe/"
        />
        <Member
          name="Saksyam Patro"
          image="/headshots/saksyam.jpg"
          twitter=""
          linkedinURL="https://www.linkedin.com/in/sakshyampatro/"
        />

          <Member
          name="Aadi Mukherjee"
          image="/headshots/aadi.jpg"
          twitter="https://twitter.com/aadi_mukherjee"
          linkedinURL="https://www.linkedin.com/in/aadimukherjee/"
        />
        
      </MembersContainer>


      <SectionTitle>Alumni</SectionTitle>
      <MembersContainer>
        <Member
          name="Zayyan Faizal"
          image="/headshots/zayyan_faizal.jpg"
          twitter="brownmanwonders"
          linkedinURL="https://www.linkedin.com/in/zayyanfaizal"
        />

        <Member
          name="Adrian Petrykiw"
          image="/headshots/adrian_petrykiw.jpg"
          twitter="petrykiw"
          linkedinURL="https://www.linkedin.com/in/adrianpetrykiw/"
        />

        

      </MembersContainer>

    </Container>
  );
}
