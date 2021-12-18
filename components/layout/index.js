import Footer from "../footer";
import Navbar from "../nav";

export default function Layout ({children}) {
    return (
    <> 
        <Navbar /> 
        {children}
        <Footer />
    </>

    )
}