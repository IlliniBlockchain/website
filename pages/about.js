import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  SectionTitle
} from '../components/shared-styled'

export default function AboutUs() {
    return (
      <div className={styles.container}>
        <Head>t
          <title>About Us</title>
          <meta name="About Us - Illini Blockchain" content="About the Illini Blockchain Team" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <SectionTitle>Who are we?</SectionTitle>       

      </div>
    )
  }