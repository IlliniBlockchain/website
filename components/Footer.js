import styled from "styled-components"

const FooterSection = styled.div`
background: #202020;
color: #fff;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
`

const Footer = () => {
    return (
        <FooterSection>
            <p>Illini Blockchain 2021 All Rights Reserved</p>
        </FooterSection>
    )
}

export default Footer
