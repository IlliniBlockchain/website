import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image'
const Nav = styled.nav`
padding-left: 1rem;
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
`

const StyledLinkTwo = styled.a`
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
`

const Navbar = () => {
    return (
        <Nav>
            <div style={{display:"flex", marginLeft:'40px', alignItems:"center", marginRight:"auto", whiteSpace:"nowrap"}}>
              <Image src="/blocks_transparent.png" width="50px" height="50px" layout="fixed"/>
              <div style={{fontSize:"1.5rem", padding:"1rem"}}> ILLINI BLOCKCHAIN </div>
            </div>
            <div>

              <Link href='/' passHref>
                  <StyledLink>Home</StyledLink>
              </Link>
              <Link href='/about' passHref>
                  <StyledLink>About Us</StyledLink>
              </Link>
              <Link href='/projects' passHref>
                  <StyledLink>Projects</StyledLink>
              </Link>
              <Link href='/blog' passHref>
                  <StyledLink>Blogs</StyledLink>
              </Link>
            </div>
            <div>
              <Link href='/contact' passHref>
                  <StyledLinkTwo> Contact Us</StyledLinkTwo>
              </Link>
            </div>
        </Nav>
    )
}

export default Navbar;
