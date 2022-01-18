import styled from "styled-components";

const ApplyBackground = styled.div`
background-color: var(--navy-blue);
padding: 50px 0;
top:-5.5rem;
position:relative;
display:flex;
flex-direction:row;

@media only screen and (max-width: 1100px) {
    flex-direction: column;
  }

`
const ApplyContainer = styled.div`
width: calc(var(--global-width) - 250px);
margin-left:10%;
margin-top:1rem;
position:relative;
@media only screen and (max-width:650px) {
  margin:0;
}
`

const ApplyHeader = styled.h2`
font-size: 1.8rem;
margin: 0;
width:70%;
@media only screen and (max-width: 1100px) {
    width:80%;
    text-align:center;
  }

@media only screen and (max-width:650px) {
  margin:auto;
}
`
const ApplySubheader = styled.h3`
font-size: 1.2rem;
margin: 0;
font-weight: normal;
width:80%;
@media only screen and (max-width: 1100px) {
    text-align:center;
  }

  @media only screen and (max-width:650px) {
    margin:auto;
  }
`

const ApplyButton = styled.a`
width:fit-content;
padding:.8rem;
border-width:0;
border-radius:1rem;
margin-bottom:1rem;
margin-left: auto;
margin-right: auto;
white-space:nowrap;
font-size:1.5rem;
background:var(--orange);
color:white;
font-weight:bold;
margin-top:1rem;
font-family:Montserrat;
`

export {
    ApplyBackground,
    ApplyContainer,
    ApplySubheader,
    ApplyHeader,
    ApplyButton
}