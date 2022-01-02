import styled from 'styled-components'

const PillarTitle = styled.h3`
text-align: center;
font-size: 2rem;
`
const PillarDescription = styled.h4`
font-size: 1.2rem;
font-weight: lighter;
margin-bottom:2rem;
`

const PillarCardContainer = styled.div`
width: 400px;
border-radius: 10px;
margin: 10px;
margin-bottom: 25px;
padding: 10px 50px;
height: auto;
text-align: center;
display:flex;
flex-direction:column;
`

const PillarButton = styled.a`
width:fit-content;
padding:.8rem;
border-width:0;
border-radius:1rem;
margin-bottom:1rem;
margin-left: auto;
margin-right: auto;
white-space:nowrap;
font-size:1rem;
background:var(--background-color);
color:white;
font-weight:bold;
margin-top:auto;
font-family:Montserrat;
`

const PillarIcon = styled.div`
font-size:4rem;
`

export {
    PillarTitle, 
    PillarDescription, 
    PillarCardContainer,
    PillarButton,
    PillarIcon
}