import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'

const About = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.head}>ABOUT ME</h1>
            <h3 className={styles.about}>{`Hello! This is Srijeet Tamrakar. I have been learning full stack web development for the past 3 years. I am a self taught web developer constantly learning new things and growing everyday. I hope to see myself working with you. Cheers!`}</h3>
            <div data-aos="zoom-in-up" data-aos-offset="20" className={styles.interest}>
            <h1 >INTERESTS</h1>
                <div  className={styles.icon} >
                    <i  className="fas fa-guitar"></i>
                    <h4 >Playing Guitar</h4>
                </div>
                <div  className={styles.icon}>
                    <i className="fas fa-gamepad"></i>
                    <h4>Games</h4>
                </div>
                <div  className={styles.icon}>
                    <i className="fas fa-dumbbell"></i>
                    <h4>Workout</h4>
                </div>
            </div>
        </div>
    )
}

export default About
