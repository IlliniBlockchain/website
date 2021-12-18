import Layout from '../components/layout'
import { GlobalStyle } from '../components/shared-styled'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle/>
      <Component {...pageProps} />
    </Layout>
  );
  
  
}

export default MyApp
