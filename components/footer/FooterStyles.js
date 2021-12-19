import styled from 'styled-components'

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

export {
	FooterSection,
	FooterContainer,
	FooterLeftContainer,
	FooterLogoContainer,
	FooterImageContainer,
	FooterLinksContainer,
	FooterLinksSectionContainer,
	FooterSocialsContainer
};