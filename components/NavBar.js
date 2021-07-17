import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const NavBar = () => {
    const [expanded, setExpanded] = useState(false)
    return (
			<>
				<Navbar expanded={expanded} className={styles.header} expand='md'>
					<Navbar.Toggle
						style={{color: "white"}}
						onClick={() => setExpanded(expanded ? false : "expanded")}
					>
						{!expanded ? (
							<i className='fas fa-bars'></i>
						) : (
							<i className='fas fa-times'></i>
						)}
					</Navbar.Toggle>
					<Navbar.Collapse
						onClick={() => setExpanded(expanded ? false : "expanded")}
						className={`justify-content-start ${styles.collapse}`}
					>
						<Nav>
							<Link href='#home'>
								<a
									data-aos-delay='2400'
									data-aos='zoom-in-up'
									data-aos-once='true'
									className={styles.linki}
								>
									{" "}
									HOME{" "}
								</a>
							</Link>
							<Link href='#projects'>
								<a
									data-aos-delay='2600'
									data-aos='zoom-in-up'
									data-aos-once='true'
									className={styles.linki}
								>
									PROJECTS
								</a>
							</Link>
							<Link href='#about'>
								<a
									data-aos-delay='2800'
									data-aos='zoom-in-up'
									data-aos-once='true'
									className={styles.linki}
								>
									ABOUT
								</a>
							</Link>
							<Link href='#contact'>
								<a
									data-aos-delay='3000'
									data-aos='zoom-in-up'
									data-aos-once='true'
									className={styles.linki}
								>
									CONTACT
								</a>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		);
}

export default NavBar
