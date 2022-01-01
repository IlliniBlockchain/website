import Head from 'next/head'
import {
  SectionTitle,
  Container
} from '../components/shared-styled'
import {
  Project,
  ProjectsContainer
} from '../components/projects'

export default function Projects() {
    return (
      <>
        <Head>t
          <title>Projects - Illini Blockchain</title>
          <meta name='description' content='Projects that Illini Blockchain has worked on.' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <SectionTitle>Projects</SectionTitle>

        <ProjectsContainer>

          <Project
            title={'NFT Mint'}
            imageSrc={'/illiniBlockchainNFT.svg'}
            imageAlt={'Illini NFT Mint Image'}
            stack={['Next.js', 'ethers.js']}
            githubUrl={'https://github.com/IlliniBlockchain/nft-mint'}
            websiteUrl={'https://illini-mint.vercel.app/'}
            description={'Onboarded 75+ people onto Ethereum with our first event as an organization by helping them set up their wallet, airdropping testnet ETH, and minting their first NFT. We built this simple web app to make it easy for anyone interested in blockchain to get involved and start playing with the technology. We\'ve done our best to design this so that you don\'t need to know much about blockchain to jump right in.'}
          />

        </ProjectsContainer>

      </>
    )
  }