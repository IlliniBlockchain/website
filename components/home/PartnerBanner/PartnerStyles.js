import styled from 'styled-components'

const PartnerContainer = styled.div`
background-color: var(--background-color);
margin-top: -90px;
margin-bottom: 175px;
padding-top: 50px;
`

const PartnerLogoContainer = styled.div`
max-width: 90%;
width: 1200px;
display: flex;
flex-wrap: wrap;
margin: auto;
justify-content: space-between;
align-items: center;
`

const PartnerLogoWrapper = styled.div`
margin: auto;
position: relative;
width: 250px;
height: auto;

aspect-ratio: 2.2/1;
overflow: hidden;
`

export {
    PartnerContainer,
    PartnerLogoContainer,
    PartnerLogoWrapper
}