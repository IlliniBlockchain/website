import styled from 'styled-components'

const InfoBackground = styled.div`
height:fit-content;
width:100vw;
background: white;
display:table;
table-layout:fixed;

@media only screen and (max-width: 650px) {
    display: flex;
    flex-direction:column;
}
`

const InfoTitle = styled.div`
font-size: 2.5rem;
margin-bottom: 3rem;
color: black;
font-weight: bold;
text-align: left;
padding: 2rem 0 0 10%;
margin-left:10%;
display:table-cell;

@media only screen and (max-width: 650px) {
    display: flex;
    padding:1rem;
    justify-content:center;
    margin:0;
}
`
const InfoDescription = styled.div`
color:black;
padding:2rem 10% 2rem 0;
font-size:1.2rem;
margin-right:10%;
display:table-cell;
vertical-align:middle;

@media only screen and (max-width: 650px) {
    display: flex;
    padding:1rem;
    text-align: center;
    margin:0 0 1rem 0;
    width:80%;
    align-self:center;
}
`

export {
    InfoBackground,
    InfoTitle,
    InfoDescription
}