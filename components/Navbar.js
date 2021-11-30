import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
height: 80px;
background: #202020;
color: #fff; 
display: flex;
justify-content: space-between;
align-items: center;
`

const StyledLink = styled.a`
padding: 0rem 2rem;
`


const Navbar = () => {
    return (
        <Nav>
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
                <StyledLink>Contact Us</StyledLink>
            </Link>
            </div>
        </Nav>
    )
}

export default Navbar;
