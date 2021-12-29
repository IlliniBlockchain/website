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
          <title>Illini Blockchain</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <SectionTitle>Projects</SectionTitle>
        
        <ProjectsContainer>
          <Project
            title={"NFT Mint"}
            description={"Our NFT mint."}
          />
        </ProjectsContainer>

      </>
    )
  }