import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar1 = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            <Navbar expanded={expanded} sticky='top' className={styles.header} expand="lg">
                <Navbar.Toggle style={{color:'white'}} onClick={() => setExpanded(expanded ? false : "expanded")} >{!expanded ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}</Navbar.Toggle>
                <Navbar.Collapse onClick={() => setExpanded(expanded ? false : "expanded")} className="justify-content-start">
                <Nav>
                    <Link href='/'><a className={styles.linki} > HOME </a></Link>
                    <Link href='/contact'><a className={styles.linki} >CONTACT</a></Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>
    )
}

export default Navbar1
