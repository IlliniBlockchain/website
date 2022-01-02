import styled from "styled-components";

const NewsletterBackground = styled.div`
background-color: var(--orange);
padding: 50px 0;
top:-5.5rem;
position:relative;
display:flex;
flex-direction:row;

@media only screen and (max-width: 475px) {
    flex-direction: column;
  }

`
const NewsletterContainer = styled.div`
width: var(--global-width);
margin-left:10%;
position:relative;
`

const NewsletterHeader = styled.h2`
font-size: 2vmax;
margin: 0;
width:60%;
@media only screen and (max-width: 475px) {
    width:80%;
    text-align:center;
  }
`
const NewsletterSubheader = styled.h3`
font-size: 1.5vmax;
margin: 0;
font-weight: normal;
width:80%;
@media only screen and (max-width: 475px) {
    text-align:center;
  }

`

export {
    NewsletterBackground,
    NewsletterContainer,
    NewsletterSubheader,
    NewsletterHeader,
}