import React from 'react'
import NavBar from './NavBar'
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
