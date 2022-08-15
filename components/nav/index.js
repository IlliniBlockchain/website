import Link from "next/link";
import Image from "next/image";
import {
  Nav,
  StyledLink,
  StyledLinkTwo,
  IconWrapper,
  LogoText,
  LogoLink,
  MobileStyledLink,
  MobileNav,
  MobileBackground,
} from "./NavStyles";
import { GiHamburgerMenu, GiExitDoor } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setNav(false);
  }, [router.pathname]);

  return (
    <Nav>
      <Link href="/" passHref>
        <LogoLink>
          <Image
            src="/IlliniBlockchainLogoDarkMode.png"
            width="50px"
            height="50px"
            layout="fixed"
          />
          {nav ? <></> : <LogoText> ILLINI BLOCKCHAIN </LogoText>}
        </LogoLink>
      </Link>

      {nav ? (
        <>
          <MobileNav>
            <Link href="/about" passHref>
              <MobileStyledLink>About Us</MobileStyledLink>
            </Link>
            <Link href="/projects" passHref>
              <MobileStyledLink>Projects</MobileStyledLink>
            </Link>
            <a
              href="https://medium.com/illiniblockchain"
              target="_blank"
              rel="noreferrer"
            >
              <MobileStyledLink>Blogs</MobileStyledLink>
            </a>
            <Link href="mailto:illiniblockchain@gmail.com" passHref>
              <MobileStyledLink> Contact Us</MobileStyledLink>
            </Link>
            <MobileBackground />
          </MobileNav>
        </>
      ) : (
        <>
          <div>
            <Link href="/about" passHref>
              <StyledLink>About Us</StyledLink>
            </Link>
            <Link href="/projects" passHref>
              <StyledLink>Projects</StyledLink>
            </Link>
            <a
              href="https://medium.com/illiniblockchain"
              target="_blank"
              rel="noreferrer"
            >
              <StyledLink>Blogs</StyledLink>
            </a>
          </div>
          <div>
            <Link href="https://linktr.ee/illiniblockchain" passHref>
              <StyledLinkTwo target="_blank">Contact Us</StyledLinkTwo>
            </Link>
          </div>
        </>
      )}
      <IconWrapper>
        {nav ? (
          <GiExitDoor onClick={() => setNav(!nav)} style={{ color: "black" }} />
        ) : (
          <GiHamburgerMenu onClick={() => setNav(!nav)} />
        )}
      </IconWrapper>
    </Nav>
  );
};

export default Navbar;
