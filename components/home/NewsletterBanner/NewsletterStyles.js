import styled from "styled-components";

const NewsletterBackground = styled.div`
background-color: var(--orange);
padding: 50px 0;
top: calc((var(--recruitment) * -1 + 1) * -5.5rem);
position:relative;
display:flex;
flex-direction:row;

@media only screen and (max-width: 1100px) {
  flex-direction: column;
}

`
const NewsletterContainer = styled.div`
width: var(--global-width);
margin-left:10%;
position:relative;
justify-content:center; 
align-items:center; 
`

const NewsletterHeader = styled.h2`
font-size: 1.8rem;
margin: 0;
width:70%;
@media only screen and (max-width: 1100px) {
    width:80%;
    text-align:center;
  }
`
const NewsletterSubheader = styled.h3`
font-size: 1.2rem;
margin: 0;
font-weight: normal;
width:80%;
@media only screen and (max-width: 1100px) {
    text-align:center;
  }

`

const NewsletterButton = styled.a`
width:fit-content;
padding:.8rem;
border-width:0;
border-radius:1rem;
margin-bottom:1rem;
margin-left: auto;
margin-right: auto;
white-space:nowrap;
font-size:1.5rem;
background:var(--navy-blue);
color:white;
font-weight:bold;
margin-top:1rem;
font-family:Montserrat;
`

export {
    NewsletterBackground,
    NewsletterContainer,
    NewsletterSubheader,
    NewsletterHeader,
    NewsletterButton
}