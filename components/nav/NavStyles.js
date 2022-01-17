import styled from 'styled-components';


const Nav = styled.nav`
padding-left: 1rem;
padding-right:1rem;
margin-top:10px;
height: 80px;
color: #fff; 
display: flex;
justify-content: end;
align-items: center;
font-weight: bold;
position:relative;
z-index:1;
white-space:nowrap;

`

const StyledLink = styled.a`
display:none;
@media only screen and (min-width: 650px) {
    padding: 2rem;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    border-radius: 50px;
    &:hover {
        color: black;
        background: white;
    }
    font-weight: bold;
}
`

const MobileStyledLink = styled.a`
// display:none;

padding: 2rem;
padding-top: 10px;
padding-bottom: 10px;
color: black;
border-radius: 50px;
&:hover {
    color: black;
    background: white;
}
font-weight: bold;
`

const MobileNav = styled.div`
    display:flex;
    flex-direction:column;
    margin-right: auto;
    font-size:2rem;
    margin-top:auto;
    padding-top:3rem;
    height:100vh;
    background:white;
    // width:100vw;
    // z-index:2;
`

const StyledLinkTwo = styled.a`
display:none;
@media only screen and (min-width: 650px) {

  margin-right: 100px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  background-color: #e84a27;
  border-radius: 50px;
  &:hover {
    color: black;
    background: white;
  }
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: bold;
}
`

const LogoText = styled.div`
display:none;

@media only screen and (min-width: 650px) {
    font-size:1.5rem;
    padding:1rem;
}
`

const LogoLink = styled.a`
display:flex;
margin-left:40px;
align-items:center;
margin-right:auto;
whitespace:nowrap;
@media only screen and (max-width: 650px) {
    margin-left:0;
}
`

const IconWrapper = styled.div`
font-size:2rem;
@media only screen and (min-width: 650px) {
    display:none;
}

`

export { 
    Nav, 
    StyledLink, 
    StyledLinkTwo, 
    IconWrapper, 
    LogoText, 
    LogoLink, 
    MobileStyledLink,
    MobileNav 
}