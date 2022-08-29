import styled from 'styled-components';

const PeopleContainer = styled.div`
margin: auto;
width: 90%;
margin-bottom: 175px;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;

const PersonContainer = styled.div`
width: 400px;
margin: 10px;
margin-bottom: 25px;
`

const HighlightImage = styled.div`
width: 75%;
margin: auto;
aspect-ratio: 1/1;
border-radius: 100%;
overflow: hidden;
`

const HighlightHeader = styled.h3`
text-align: center;
`

const HighlightDescription = styled.p`
`

const HighlightLink = styled.a`
text-decoration: underline;
:hover {
  text-decoration: none;
}
`


export {
  PeopleContainer,
  PersonContainer,
  HighlightImage,
  HighlightDescription,
  HighlightHeader,
  HighlightLink
};