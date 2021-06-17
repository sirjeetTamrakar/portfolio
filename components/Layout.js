import React from 'react'
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div style={{backgroundColor:'white'}}>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
