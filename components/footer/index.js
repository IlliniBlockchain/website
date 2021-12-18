import styled from "styled-components"
import { AiOutlineTwitter, AiFillMediumSquare, AiFillGithub } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { SiNotion } from 'react-icons/si'
import Image from 'next/image'

const FooterSection = styled.div`
background: var(--footer-background);
padding: 50px 0 75px 0;
`

const FooterContainer = styled.div`
width: calc(var(--global-width) * 90 / 100);
height: auto;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media only screen and (max-width: calc(1200px * 100 / 95)) {
  flex-direction: column;
}

`

const FooterLeftContainer = styled.div`
width: 40%;
vertical-align: top;
@media only screen and (max-width: calc(1200px * 100 / 95)) {
  width: 100%;
}
`

const FooterLogoContainer = styled.div`
display: flex;

h3 {
	margin-left: 20px;
	font-size: 2rem;
}

@media only screen and (max-width: calc(1200px * 100 / 95)) {
  justify-content: center;
}

`

const FooterImageContainer = styled.div`
display: block;
width: 100px;
height: 100px;
`

const FooterLinksContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin: 0;
@media only screen and (max-width: calc(1200px * 100 / 95)) {
  width: 100%;
	justify-content: space-around;
}
`

const FooterLinksSectionContainer = styled.div`
display: flex;
flex-direction: column;
`

const FooterSocialsContainer = styled.div`
width: 250px;
margin-top: 45px;
font-size: 2rem;
display: flex;
justify-content: space-between;
`

const Footer = () => {
	return (
		<FooterSection>
			<FooterContainer>

				<FooterLeftContainer>

					<FooterLogoContainer>
						<FooterImageContainer>
							<Image src="/illiniBlockchainLogo.png" alt="Illini Blockchain Logo" layout="responsive" width={100} height={100}/>
						</FooterImageContainer>
						<h3>Illini Blockchain</h3>
					</FooterLogoContainer>


				</FooterLeftContainer>


				<FooterLinksContainer>
					<FooterLinksSectionContainer>
						<h4>Resources</h4>
						<a>Resources Database</a>
						<a>Crypto Thinkers</a>
						<a>Down the Rabbit Hole</a>
					</FooterLinksSectionContainer>
					<FooterLinksSectionContainer>
						<h4>Projects</h4>
						<a>NFT Mint</a>
						<a>IlliniDAO</a>
					</FooterLinksSectionContainer>
					<FooterLinksSectionContainer>
						<h4>Blog</h4>
						<a>Bitcoin</a>
						<a>Ethereum</a>
					</FooterLinksSectionContainer>
				</FooterLinksContainer>


				<FooterSocialsContainer>
					<a><AiOutlineTwitter/></a>
					<a><AiFillMediumSquare/></a>
					<a><FaDiscord/></a>
					<a><SiNotion/></a>
					<a><AiFillGithub/></a>
				</FooterSocialsContainer>

			</FooterContainer>

		</FooterSection>
	)
}

export default Footer
