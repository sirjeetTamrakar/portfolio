import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const NavBar = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            <Navbar  expanded={expanded} sticky='top' className={styles.header} expand="lg">
                <Navbar.Toggle style={{color:'white'}} onClick={() => setExpanded(expanded ? false : "expanded")} >{!expanded ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}</Navbar.Toggle>
                <Navbar.Collapse onClick={() => setExpanded(expanded ? false : "expanded")} className="justify-content-start" style={{position:'absolute', zIndex:2}}>
                <Nav>
                    <Link href='/#home'><a className={styles.linki} > HOME </a></Link>
                    <Link href='#projects'><a className={styles.linki} >PROJECTS</a></Link>
                    <Link href='#about'><a className={styles.linki} >ABOUT</a></Link>     
                    <Link href='#contact'><a className={styles.linki} >CONTACT</a></Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>
    )
}

export default NavBar
