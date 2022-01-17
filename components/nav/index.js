import Link from 'next/link';
import Image from 'next/image'
import { Nav, StyledLink, StyledLinkTwo, IconWrapper, LogoText, LogoLink, MobileStyledLink, MobileNav } from './NavStyles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
    return (
        <Nav>
            <Link href='/' passHref>
              <LogoLink onClick={() => setNav(false)}>
                <Image src="/blocks_transparent.png" width="50px" height="50px" layout="fixed"/>
                <LogoText> ILLINI BLOCKCHAIN </LogoText>
              </LogoLink>
            </Link>

              { nav ? 
                <>
                  <MobileNav>
                    <Link href='/about' passHref>
                        <MobileStyledLink onClick={() => setNav(false)}>About Us</MobileStyledLink>
                    </Link>
                    <Link href='/projects' passHref>
                        <MobileStyledLink onClick={() => setNav(false)}>Projects</MobileStyledLink>
                    </Link>
                    <Link href='https://medium.com/illiniblockchain' passHref>
                        <MobileStyledLink onClick={() => setNav(false)}>Blogs</MobileStyledLink>
                    </Link>
                    <Link href='mailto:illiniblockchain@gmail.com' passHref>
                        <MobileStyledLink onClick={() => setNav(false)}> Contact Us</MobileStyledLink>
                    </Link>
                  </MobileNav>
                </>
                :
                <>
                  <div>
                    <Link href='/about' passHref>
                        <StyledLink>About Us</StyledLink>
                    </Link>
                    <Link href='/projects' passHref>
                        <StyledLink>Projects</StyledLink>
                    </Link>
                    <Link href='https://medium.com/illiniblockchain' passHref>
                        <StyledLink>Blogs</StyledLink>
                    </Link>
                  </div>
                  <div>
                    <Link href='mailto:illiniblockchain@gmail.com' passHref>
                        <StyledLinkTwo> Contact Us</StyledLinkTwo>
                    </Link>
                  </div>
                </>
              }
            <IconWrapper>
              <GiHamburgerMenu onClick={() => setNav(!nav)}/>
            </IconWrapper>
        </Nav>
    )
}

export default Navbar;
