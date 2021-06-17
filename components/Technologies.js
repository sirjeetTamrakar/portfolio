import React from 'react'
import styles from '../styles/Tech.module.css'

const Technologies = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.head}>TECHNOLOGIES</h1>
            <div data-aos="zoom-in-left"  className={styles.items}>
                <div className={styles.item}>
                    <i className="devicon-mongodb-plain" style={{ fontSize: '2rem' }}></i>
                    <div>MongoDB</div>
                </div>
                <div className={styles.item}>
                    <i className=" devicon-express-original" style={{ fontSize: '2rem' }}></i>
                    <div>Express</div>
                </div>
                <div className={styles.item}>
                    <i className="devicon-react-original" style={{ fontSize: '2rem' }}></i>
                    <div>React</div>
                </div>
                <div className={styles.item}>
                    <i className="devicon-nodejs-plain" style={{ fontSize: '2rem' }}></i>
                    <div>Node JS</div>
                </div>
                <div className={styles.item}>
                    <i className="devicon-python-plain" style={{ fontSize: '2rem' }}></i>
                    <div>Python</div>
                </div>
                <div className={styles.item}>
                    <i className="devicon-java-plain" style={{ fontSize: '2rem' }}></i>
                    <div>Java</div>
                </div>
                
            </div>
        </div>
    )
}

export default Technologies
