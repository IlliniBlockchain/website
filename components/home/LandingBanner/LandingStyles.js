import styled from 'styled-components'



const LandingContainer = styled.div`
width: 100%;
height: 100vh;
display:flex;
justify-content:center;
flex-direction:column;
background: rgba(0, 0, 0, 0) linear-gradient(288.13deg, rgb(13, 46, 98) 25.21%, rgb(99, 57, 74) 55.16%, rgb(232, 74, 39) 100.86%) repeat scroll 0% 0%;
top: -5.5rem;
position:relative;
`



const LandingHeader = styled.h1`
font-size: 4vmax;
width:100%;
text-align: center;
display:flex;
position:relative;
justify-content:center;
align-items:center;
font-weight: bold;
margin-left:0;
margin-right:0;
margin-bottom:1rem;
margin-top:0;
`

const LandingSubheader = styled.h2`
font-size:2vmax;
width:80%;
text-align:center;
display:flex;
position:relative;
justify-content:center;
align-items:center;
align-self:center;
font-weight: normal;
`

export {
    LandingContainer,
    LandingSubheader,
    LandingHeader,
}