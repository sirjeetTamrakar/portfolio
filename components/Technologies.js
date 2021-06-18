import React from 'react'
import styles from '../styles/Tech.module.css'
import { tech } from '../constants/constants'

const Technologies = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.head}>TECHNOLOGIES</h1>
            <div data-aos="zoom-in-down" className={styles.items}>
                {tech.map(({ text, icon }) => (
                    <div key={text} className={styles.item}>
                        <i className={icon} style={{ fontSize: '2rem' }}></i>
                        <div>{text}</div>
                    </div>    
                ))}                
            </div>
        </div>
    )
}

export default Technologies
