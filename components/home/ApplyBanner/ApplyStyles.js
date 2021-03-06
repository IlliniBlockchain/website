import styled from "styled-components";

const ApplyBackground = styled.div`
background-color: var(--navy-blue);
padding: 50px 0;
top: -5.5rem;
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
@media only screen and (max-width:1100px) {
  margin: auto;
}
`

const ApplyHeader = styled.h2`
font-size: 1.8rem;
margin: 0;
width:70%;
@media only screen and (max-width: 1100px) {
    margin:auto;
    width:80%;
    text-align:center;
}
`
const ApplySubheader = styled.h3`
font-size: 1.2rem;
margin: 0;
font-weight: normal;
width:80%;
@media only screen and (max-width: 1100px) {
  text-align:center;
  margin:auto;
}
`

const ApplyButton = styled.a`
width:fit-content;
padding:10px 125px 10px 125px;
border-width:0;
border-radius:1rem;
margin-bottom:2rem;
margin-top:2rem;
margin-left:0rem;
margin-right:10rem;
white-space:nowrap;
font-size:1.5rem;
background:var(--orange);
color:white;
font-weight:bold;
font-family:Montserrat;

@media only screen and (max-width: 1100px) {
  margin: 25px auto;
}
`

export {
    ApplyBackground,
    ApplyContainer,
    ApplySubheader,
    ApplyHeader,
    ApplyButton
}