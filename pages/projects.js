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
          title={"Bitcoin Node"}
          imageSrc={"/IlliniNode.png"}
          imageAlt={"Illini Blockchain Logo"}
          stack={["Go", "AWS", "Neo4j"]}
          githubUrl={"https://github.com/IlliniBlockchain/etl-bitcoin"}
          websiteUrl={""}
          description={
            "This semester we set up a bitcoin full node and Neo4j server, both on AWS as we just needed some compute resources to get started quickly. We wrote an ETL (Extract, Transform, Load) process in Go to get blockchain data from the node and index it in Neo4j to allow us to do some interesting graph-based queries and visualizations on the data. We ended up getting the whole process working and now have a Neo4j dashboard we can play around with internally. In the future, it would be cool to open up access to this Neo4j dashboard to students on campus, get a full node on campus infrastructure somewhere, and do a similar ETL process with an Ethereum node as there's much more data to work with."
          }
        />

        <Project
          title={"Agora"}
          imageSrc={"/IlliniBlockchainLogo.png"}
          imageAlt={"Illini Blockchain Logo"}
          stack={["Rust", "Anchorlang"]}
          githubUrl={"https://github.com/IlliniBlockchain/agora-court"}
          websiteUrl={""}
          description={
            "This semester we created Agora Marketplace, a decentralized peer-to-peer buying and selling platform that allows anyone from anywhere across the globe to use their crypto as a way to buy the products they need in their everyday life. In order to settle disputes on our platform, we also created a joint product, Agora Court, which is a decentralized arbitration protocol that any dApp can interface with to resolve conflicts on their own platforms. We mainly focused on writing the Solana smart contracts using the Anchorlang library, completing a majority of the backend infrastructure semester and plan to continue development this semester."
          }
        />

        <Project
          title={"SAP Lending Protocol"}
          imageSrc={"/IlliniSAP.png"}
          imageAlt={"Illini Blockchain Logo"}
          stack={["Solidity", "Javascript"]}
          githubUrl={"https://github.com/IlliniBlockchain/sap"}
          websiteUrl={"https://www.figma.com/proto/fDFz9iQPkypVuCidiERcoJ/Sap?node-id=1%3A15&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=25%3A981"}
          description={
            "This semester the SAP team worked building an NFT collateralized lending platform.  The team considered challenges other protocols faced and made variety of design decisions to create a safer platform for lenders.  NFT prices move on a case by case basis, and thus can not be treated like typical collateral.  So, the SAP platform is based on a bidding system where burrowers create listings with their ideal loans terms (parameters: loan duration, loan amount, collateral NFT, collateral valuation, collateral ratio, interest rate) and lenders can choose to fill those loans or make a counter offer.  The team finished 90% of the smart contract work and designed a front end.  Next steps include building out a front end, figuring out liquidations, and rigorous testing."
          }
        />

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
          title={"Buoyant Protocol"}
          imageSrc={"/buoyant.png"}
          imageAlt={"Buoyant Squid Logo"}
          stack={["Rust", "React"]}
          githubUrl={"https://github.com/IlliniBlockchain/buoyant"}
          websiteUrl={"https://buoyantprotocol.xyz"}
          description={
            "Buoyant is a tradable subscriptions protocol on Solana. The idea is that a normal subscription to something like Netflix or Spotify could be a transferrable digital asset. Someone who wanted to unsubscribe after 20 days of a month-long subscription could sell it to someone looking for a 10-day trial for less. We submitted to Solana's Riptide Hackathon, and ended up being included in Grape Protocol's final list considering open source protocols for a community prize. Deployed only to devnet currently."
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
