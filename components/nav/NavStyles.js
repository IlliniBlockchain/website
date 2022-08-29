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
@media only screen and (min-width: 1100px) {
    display:inline;
    padding: 2rem;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-right:2rem;
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
margin-right:2rem;
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
    padding-top:4rem;
    height:110vh;
    // background:white;
    width:200vw;
    // z-index:2;
`

const MobileBackground = styled.div`
    position:absolute;
    height:120vh;
    width:120vw;
    background:white;
    z-index:-1;
    left:-50px;
    top:-50px;
`

const StyledLinkTwo = styled.a`
display:none;
@media only screen and (min-width: 1100px) {

  margin-right:3rem;
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

@media only screen and (min-width: 1100px) {
    display:inline;
    font-size:1.5rem;
    padding:1rem;
}
`

const LogoLink = styled.a`
display:flex;
margin-left: 40px;
margin-right: auto;
align-items:center;
justify-content: space-between;
@media only screen and (max-width: 1100px) {
    margin: auto;
    width: 230px;
}
`

const IconWrapper = styled.div`
font-size:2rem;
@media only screen and (min-width: 1100px) {
    display:none;
}

&:active {
    color:black;
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
    MobileNav,
    MobileBackground 
}