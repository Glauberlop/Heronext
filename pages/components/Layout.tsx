import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"



const Layout = ({children}:{children:any}) => {
    return (
        <>
            <Head>
                <title>HeroNext</title>
            </Head>
            <Navbar/>
                <main>{children}</main>
            <Footer/>
        </>

    )
}

export default Layout