import styled from "styled-components";

const InfoBackground = styled.div`
  height: fit-content;
  width: 100vw;
  background: white;
  display: table;
  table-layout: fixed;
  padding: 4rem;
  margin-bottom: 75px;

  @media only screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

const InfoLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 25px;

  @media only screen and (max-width: 750px) {
    margin: auto;
  }
`;

const InfoTeamImageContainer = styled.div`
  width: 100%;
  height: auto;
  @media only screen and (max-width: 750px) {
    width: 90%;
    margin: auto;
  }
`;

const InfoTitle = styled.div`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: black;
  font-weight: bold;
  text-align: left;
  padding: 2rem 0 0 0;
  display: table-cell;

  @media only screen and (max-width: 750px) {
    display: flex;
    padding: 1rem;
    justify-content: center;
    margin: 0;
  }
`;
const InfoDescription = styled.div`
  color: black;
  padding: 2rem 10% 2rem 0;
  font-size: 1.2rem;
  line-height: 2rem;
  margin-right: 15%;
  display: table-cell;
  vertical-align: middle;

  @media only screen and (max-width: 750px) {
    display: flex;
    padding: 1rem;
    margin: 0 0 1rem 0;
    width: 90%;
    align-self: center;
  }
`;

const InfoLink = styled.a`
color: var(--orange);
`

export {
  InfoBackground,
  InfoTitle,
  InfoDescription,
  InfoLeftContainer,
  InfoTeamImageContainer,
  InfoLink,
};
