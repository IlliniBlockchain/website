import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

html {

  /* Variables */
  --global-width: 1200px;
  --global-width-mobile: 100;
  --background-color: #202020;
  --dark-text-color: black;
  --light-text-color: white;
  --navy-blue: #002855;
  --white: #fff;
  --orange: #e84a27;
  --footer-background: #181818;

  --recruitment: 0;
}

@media only screen and (max-width: calc(1200px * 100 / 95)) {
  html {
    --global-width: var(--global-width-mobile);
  }
}

html,
body {  
  padding: 0;
  margin: 0;
  background-color: var(--background-color);
  // font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Montserrat, Poppins, Roboto, Oxygen,
  //   Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-family: Montserrat;
  color: var(--light-text-color);
  line-height: 1.4;
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

* {
  box-sizing: border-box;
}

`;
 
export default GlobalStyle;