import Footer from "../footer";
import Navbar from "../nav";
import Head from 'next/head'

export default function Layout ({children}) {
    return (
    <> 
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/> 
        </Head>
        <Navbar /> 
        {children}
        <Footer />
    </>

    )
}