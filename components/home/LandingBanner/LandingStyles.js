import styled from 'styled-components'

const LandingContainer = styled.div`
width: 100%;
height: 100vh;
display:flex;
justify-content:center;
flex-direction:column;
background: rgba(0, 0, 0, 0) linear-gradient(288.13deg, rgb(13, 46, 98) 25.21%, rgb(99, 57, 74) 55.16%, rgb(232, 74, 39) 100.86%) repeat scroll 0% 0%;
top:-5.5rem;
position:relative;
`



const LandingHeader = styled.h1`
font-size: 4vmax;
width:60%;
text-align: center;
display:flex;
position:relative;
justify-content:center;
align-items:center;
font-weight: bold;
margin-left:auto;
margin-right:auto;
margin-bottom:0;
margin-top:0;
`

const LandingSubheader = styled.h2`
font-size: 2vmax;
font-weight: normal;
position:relative;
margin-left:auto;
margin-right:auto;
margin-top: 0;
width:60%;
text-align:center;
`

export {
    LandingContainer,
    LandingSubheader,
    LandingHeader,
}