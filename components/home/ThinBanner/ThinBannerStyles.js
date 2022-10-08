import styled from "styled-components";

const BannerBackground = styled.div`
background-color: var(--navy-blue);
padding: 50px 0;
top: -5rem;
position:relative;
display:flex;
flex-direction:row;
justify-content: space-around;

@media only screen and (max-width: 1100px) {
    flex-direction: column;
  }

`
const BannerContainer = styled.div`
width: 50%;
@media only screen and (max-width:1100px) {
  margin: auto;
  width: 80%;
}
`

const BannerHeader = styled.h2`
font-size: 1.8rem;
margin: 0;
@media only screen and (max-width: 1100px) {
    margin:auto;
    text-align:center;
}
`
const BannerSubheader = styled.h3`
font-size: 1.2rem;
margin: 0;
font-weight: normal;
@media only screen and (max-width: 1100px) {
  text-align:center;
  margin:auto;
}
`

const BannerButton = styled.a`
width:fit-content;
height: fit-content;
margin-top: auto;
margin-bottom: auto;
padding:10px 50px;
border-width:0;
border-radius:1rem;
white-space:nowrap;
font-size:1.5rem;
background:var(--orange);
color:white;
font-weight:bold;
font-family:Montserrat;
display: flex;
flex-direction: column;
justify-content: center;

@media only screen and (max-width: 1100px) {
  margin: 25px auto;
}
`

export {
    BannerBackground,
    BannerContainer,
    BannerSubheader,
    BannerHeader,
    BannerButton
}