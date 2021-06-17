import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Hero.module.css'

const Hero = () => {
    return (
        <div  className={styles.hero}>
            <div className={styles.me} >
                <h1 data-aos="zoom-in-up" className={styles.title}>Hi, I am Srijeet.<br />I am a Full Stack Developer</h1>
                <Link   href='/contact'><button  id='projects' data-aos="zoom-in-right" className={styles.button}>Contact Me</button></Link>
            </div>
            <div  className={styles.overlay} data-aos-offset="100"
     data-aos-duration="3000" data-aos="zoom-in-left">
                <Image src='/images/i.png' alt='Srijeet Tamrakar' priority layout='fill' quality={100} className={styles.image} />
            </div>
        </div>
    )
}

export default Hero
