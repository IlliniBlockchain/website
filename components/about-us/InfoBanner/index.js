import {
  InfoBackground,
  InfoTitle,
  InfoDescription,
  InfoLeftContainer,
  InfoTeamImageContainer,
  InfoLink
} from "./InfoStyles";
import Image from "next/image";
export default function InfoBanner(props) {
  return (
    <>
      <InfoBackground>
        <InfoLeftContainer>
          <InfoTitle>About Us</InfoTitle>
          <InfoTeamImageContainer>
            <Image
              src="/IlliniBlockchainTeam.jpeg"
              width={500}
              height={300}
              objectFit="cover"
            />
          </InfoTeamImageContainer>
        </InfoLeftContainer>
        <InfoDescription>
          Established in 2021, Illini Blockchain is a curiosity-driven club
          whose mission is to learn about and get involved in the blockchain
          ecosystem. Illini Blockchain was started on the belief that the new
          applications enabled by blockchain technologies will have an impact on
          the future, and sought that the talented students, alumni, and faculty
          have the ability to be at the forefront of the industry. Our aim is to
          foster the blockchain ecosystem on campus for everyone interested,
          helping people learn the technology and applications, building
          projects, and engaging in research. Learn more <InfoLink target="_blank" href="https://www.notion.so/illiniblockchain/Illini-Blockchain-Public-ac1f93f3ad984e3fa00ce6a42c69b335">here.</InfoLink>
        </InfoDescription>
      </InfoBackground>
    </>
  );
}
