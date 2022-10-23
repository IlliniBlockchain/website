import styled from "styled-components";
import {
  AiOutlineTwitter,
  AiFillMediumSquare,
  AiFillGithub,
} from "react-icons/ai";
import { SiLinktree } from 'react-icons/si'
import { FaDiscord } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import Image from "next/image";
import {
  FooterSection,
  FooterContainer,
  FooterLeftContainer,
  FooterLogoContainer,
  FooterImageContainer,
  FooterLinksContainer,
  FooterLinksSectionContainer,
  FooterBottomContainer,
  FooterSponsorsContainer,
  FooterSponsorImageContainer,
  FooterSocialsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterLeftContainer>
          <FooterLogoContainer>
            <FooterImageContainer>
              <Image
                src="/IlliniBlockchainLogoDarkMode.png"
                alt="Illini Blockchain Logo"
                layout="responsive"
                width={100}
                height={100}
              />
            </FooterImageContainer>
            <h3>Illini Blockchain</h3>
          </FooterLogoContainer>
        </FooterLeftContainer>

        <FooterLinksContainer>
          <FooterLinksSectionContainer>
            <h4>Resources</h4>
            <a
              href="https://www.notion.so/illiniblockchain/web3-Starter-Pack-66bf4bd20bca4d26958cf78af57d379d"
              target="_blank"
              rel="noreferrer"
            >
              Web3 Starter Pack
            </a>
            <a
              href="https://www.notion.so/illiniblockchain/Crypto-Glossary-f3724122e76f4728a2602d011efb8c91"
              target="_blank"
              rel="noreferrer"
            >
              Crypto Glossary
            </a>
            <a
              href="https://www.notion.so/illiniblockchain/0dcdd7753e2d4906aac1cd3597112d82?v=43b8da323cae498388e9e8e716a4af37"
              target="_blank"
              rel="noreferrer"
            >
              Crypto Thinkers
            </a>
          </FooterLinksSectionContainer>
          <FooterLinksSectionContainer>
            <h4>Projects</h4>
            <a href="https://illinidao.com" target="_blank" rel="noreferrer">
              IlliniDAO
            </a>
            <a
              href="https://buoyantprotocol.xyz"
              target="_blank"
              rel="noreferrer"
            >
              Buoyant Protocol
            </a>
            <a
              href="https://illini-mint.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              NFT Mint
            </a>
          </FooterLinksSectionContainer>
          <FooterLinksSectionContainer>
            <h4>Blog Posts</h4>
            <a
              href="https://medium.com/@illiniblockchain/bitcoin-under-the-hood-how-does-it-actually-work-a6a64371d1e9"
              target="_blank"
              rel="noreferrer"
            >
              Bitcoin
            </a>
            <a
              href="https://medium.com/@illiniblockchain/ethereum-under-the-hood-a-decentralized-computer-bb4130f1804"
              target="_blank"
              rel="noreferrer"
            >
              Ethereum
            </a>
            <a
              href="https://medium.com/illiniblockchain/cbdcs-the-future-of-money-aaf43d7ec17a"
              target="_blank"
              rel="noreferrer"
            >
              CBDCs
            </a>
            <a
              href="https://medium.com/illiniblockchain/how-blockchain-can-make-our-next-election-more-secure-c547a3962ed4"
              target="_blank"
              rel="noreferrer"
            >
              Secure Elections
            </a>
          </FooterLinksSectionContainer>
        </FooterLinksContainer>

        <FooterBottomContainer>
          <FooterSocialsContainer>
            <a
              href="https://twitter.com/ILL_Blockchain"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://medium.com/@illiniblockchain"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillMediumSquare />
            </a>
            <a
              href="https://discord.gg/42FxuQXc"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord />
            </a>
            <a
              href="https://illiniblockchain.notion.site/Illini-Blockchain-Public-ac1f93f3ad984e3fa00ce6a42c69b335"
              target="_blank"
              rel="noreferrer"
            >
              <SiNotion />
            </a>
            <a
              href="https://github.com/IlliniBlockchain"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://linktr.ee/illiniblockchain"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinktree />
            </a>
          </FooterSocialsContainer>

          {/* <FooterSponsorsContainer>
            <h4>Sponsors</h4>
            <FooterSponsorImageContainer>
              <Image
                src="/solanaLogo.png"
                alt="Solana Logo"
                width={350}
                height={50}
              />
            </FooterSponsorImageContainer>
          </FooterSponsorsContainer> */}
        </FooterBottomContainer>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
