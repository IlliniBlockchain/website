import styled from "styled-components";

const NewsletterBackground = styled.div`
background-color: var(--orange);
padding: 50px 0;
top:-5.5rem;
position:relative;
display:flex;
flex-direction:row;

@media only screen and (max-width: 475px) {
    flex-direction: column;
  }

`

export default NewsletterBackground