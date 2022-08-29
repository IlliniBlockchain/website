import { SectionTitle } from '../../shared-styled'
import Image from 'next/image'
import {
  PeopleContainer,
  PersonContainer,
  HighlightImage,
  HighlightDescription,
  HighlightHeader,
  HighlightLink
} from './PeopleStyles'

const People = () => {

  return (
    <>
      <SectionTitle>Spotlight</SectionTitle>
      <PeopleContainer>
        <PersonCard
          headshotPath={'/headshots/zayyan_faizal.jpg'}
          role={'Software Engineer'}
          organization={'Dispatch'}
          organizationLink={'https://usedispatch.net'}
          description={"Dispatch is building a decentralized user engagement protocol on Solana that fundamentally rethinks the future of web3 user engagement, retention and acquisition. As an engineer and early employee, I help build and shape our core products. I've had the opportunity to speak to some of the largest NFT communities in the space and ship features from idea to production!"}
        />
        <PersonCard
          headshotPath={'/headshots/luke_clancy.jpg'}
          role={'Growth Intern'}
          organization={'Burst'}
          organizationLink={'https://www.joinburst.com/'}
          description={"Burst helps normal people earn safe, stable returns through DeFi. I worked directly with the founders to strategize & execute growth initiatives. I led partnerships with other companies to grow our user base. I wrote blog posts & twitter threads to help users understand DeFi and feel less scared investing in it. And, I got to network with big name investors and founders in the space."}
        />
        <PersonCard
          headshotPath={'/headshots/joe_morgan.jpg'}
          role={'Technical Writing Intern'}
          organization={'Kadena'}
          organizationLink={'https://kadena.io'}
          description={"Kadena is a proof of work layer 1 blockchain that becomes more secure as the network scales. As a writer, I improved the current documentation for an easier developer learning experience. I helped the business development team write blog posts and construct slide decks for investors. I was able to build strong relationships with the Kadena team and innovators of the web3 industry in Chicago."}
        />
      </PeopleContainer>
    </>
  )
}

const PersonCard = ({ headshotPath, role, organization, organizationLink, description }) => {
  return (
    <PersonContainer>
      <HighlightImage>
          <Image src={headshotPath} layout="responsive" width="250" height="250"/>
      </HighlightImage>
      <HighlightHeader>
        {role + ' at '}<HighlightLink href={organizationLink} target="_blank">{organization}</HighlightLink> 
      </HighlightHeader>
      <HighlightDescription>
        {description}
      </HighlightDescription>
    </PersonContainer>
  )
}

export default People