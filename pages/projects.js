import Head from "next/head";
import { SectionTitle, Container } from "../components/shared-styled";
import { Project, ProjectsContainer } from "../components/projects";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Illini Blockchain</title>
        <meta
          name="description"
          content="Projects that Illini Blockchain has worked on."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionTitle>Projects</SectionTitle>

      <ProjectsContainer>
        <Project
          title={"IlliniDAO"}
          imageSrc={"/IlliniDAO.png"}
          imageAlt={"Illini Blockchain Logo"}
          stack={["Solidity", "Foundry", "React"]}
          githubUrl={"https://github.com/IlliniBlockchain/dao-token"}
          websiteUrl={"https://illinidao.com"}
          description={
            'First version of our student organizatin DAO intended to appoint on-chain membership and handle funds for our club in a crypto-native way. Adapted OpenZeppelin governance contracts to support ERC-721 tokens to enable what we call "seasonal NFTs" for us to effectively manage club membership given the temporary lifecycle of university students. Currently deployed to Polygon Mainnet. Showcased Minority Game demo for UIUC\'s Blockchain Summit back in April.'
          }
        />

        <Project
          title={"NFT Mint"}
          imageSrc={"/illiniBlockchainNFT.png"}
          imageAlt={"Illini NFT Mint Image"}
          stack={["Next.js", "ethers.js"]}
          githubUrl={"https://github.com/IlliniBlockchain/nft-mint"}
          websiteUrl={"https://illini-mint.vercel.app/"}
          description={
            "Onboarded 75+ people onto Ethereum with our first event as an organization by helping them set up their wallet, airdropping testnet ETH, and minting their first NFT. We built this simple web app to make it easy for anyone interested in blockchain to get involved and start playing with the technology. We've done our best to design this so that you don't need to know much about blockchain to jump right in."
          }
        />
      </ProjectsContainer>
    </>
  );
}
