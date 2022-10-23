import styled from "styled-components";

const FooterSection = styled.div`
  background: var(--footer-background);
  padding: 50px 0 75px 0;
`;

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
`;

const FooterLeftContainer = styled.div`
  width: 40%;
  vertical-align: top;
  @media only screen and (max-width: calc(1200px * 100 / 95)) {
    width: 100%;
  }
`;

const FooterLogoContainer = styled.div`
  display: flex;

  h3 {
    margin-left: 20px;
    font-size: 2rem;
  }

  @media only screen and (max-width: calc(1200px * 100 / 95)) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h3 {
      margin-left: 0;
    }
  }
`;

const FooterImageContainer = styled.div`
  display: block;
  width: 100px;
  height: 100px;
`;

const FooterLinksContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  @media only screen and (max-width: calc(1200px * 100 / 95)) {
    width: 90%;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

const FooterLinksSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterBottomContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: calc(1200px * 100 / 95)) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const FooterSponsorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  vertical-align: center;
  margin-top: 45px;
  h4 {
    margin: 0;
  }
  @media only screen and (max-width: calc(1200px * 100 / 95)) {
    flex-direction: column;
    height: 75px;
    margin-top: 15px;
    align-items: center;
  }
`;

const FooterSponsorImageContainer = styled.div`
  width: 200px;
`;

const FooterSocialsContainer = styled.div`
  width: 250px;
  margin-top: 45px;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
`;

export {
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
};
