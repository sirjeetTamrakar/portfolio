import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from '../styles/Navbar.module.css'

const NavBar = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            <Navbar expanded={expanded} className={styles.header} expand="lg">
                <Navbar.Toggle style={{color:'white'}} onClick={() => setExpanded(expanded ? false : "expanded")} >{!expanded ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}</Navbar.Toggle>
                <Navbar.Collapse onClick={() => setExpanded(expanded ? false : "expanded")} className="justify-content-start">
                <Nav>
                    <AnchorLink href='#home'><a className={styles.linki} > HOME </a></AnchorLink>
                    <AnchorLink href='#projects'><a className={styles.linki} >PROJECTS</a></AnchorLink>
                    <AnchorLink href='#about'><a className={styles.linki} >ABOUT</a></AnchorLink>     
                    <AnchorLink href='#contact'><a className={styles.linki} >CONTACT</a></AnchorLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>
    )
}

export default NavBar
