import React from 'react'
import { TimeLineData } from '../constants/constants'
import styles from '../styles/Timeline.module.css'

const Timeline = () => {
    return (
        <div className={styles.main}>
            <h1  className={styles.head}>EDUCATION</h1>
            {TimeLineData.map(({ year, text}) => (
                <div data-aos="zoom-in-right"  className={styles.grid} key={text}>
                    <h2  className={styles.p}>{year}</h2>
                    <h3 className={styles.p}>{text}</h3>
                </div>
            ))}
        </div>
    )
}

export default Timeline
