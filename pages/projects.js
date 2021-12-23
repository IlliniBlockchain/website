import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  SectionTitle
} from '../components/shared-styled'

export default function Projects() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Projects - Illini Blockchain</title>
          <meta name="description" content="Illini Blockchain Projects" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <SectionTitle>Projects</SectionTitle>       

      </div>
    )
  }