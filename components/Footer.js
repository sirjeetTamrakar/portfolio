import React from 'react'
import styles from '../styles/Navbar.module.css'

const Footer = () => {
    return (
        <>
            <div id='contact' className={`${styles.footer} px-4`}>
            <h4>Copyright &copy; 2021 Sirjeet Tamrakar | All Rights Reserved.</h4>
                <div className={styles.icon}>
                    <a href="https://www.instagram.com/__srijeet__/" target='blank' className={styles.a}><i className="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/sirjeet.tamrakar" target='blank' className={styles.a}><i className="fab fa-facebook"></i></a>
                    <a href="https://www.snapchat.com/add/s_tamrakara" target='blank' className={styles.a}><i className="fab fa-snapchat-ghost"></i></a>
                </div>
                <div className={styles.phone}>
                    <h6 className={styles.i}><i className="fas fa-phone-alt"></i> 9860913929</h6>
                    <h6 className={styles.i}><i className="fas fa-home"></i> Baluwatar, Kathmandu</h6>
                    <h6 className={styles.i}><i className="fas fa-envelope"></i> sirjeettamrakar007@gmail.com</h6>
                </div>
                    <div className='mt-4'>Made With
                    </div>
                    <i className="devicon-nextjs-original-wordmark" style={{fontSize:'4rem'}}></i>
        </div>
        
        </>
    )
}

export default Footer
