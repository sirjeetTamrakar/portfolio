import React, { useState,useEffect } from "react";
import emailjs from 'emailjs-com'
import styles from '../styles/Contact.module.css'
import Navbar1 from "../components/Navbar1";

const contact = () => {
  const [sent, setSent] = useState(false)
  const [alert, setAlert] = useState(false)
  const done = () => {
    setAlert(true)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
        setAlert(false)
    },[2000])
    return () => clearTimeout(timeout)
  }, [alert])
  
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_2gswzwv', 'template_2gamusm', e.target, 'user_BoL6jhzMm2dNvVpf04Zck')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
    setSent(true)
  }

  return (
    <>
      <Navbar1/>
      {alert && <div className='d-flex justify-content-center text-white position-sticky' style={{ backgroundColor: 'black', paddingBottom: '2rem', fontSize:'3rem'}}>Email Sent!</div>}
      <div className={styles.black}>
      <div className={`mx-auto ${styles.form}`}>
        <div data-aos="zoom-in-right" className={styles.imgBg}>
          <img className={styles.imgForm} src={sent ? '/images/sent.jpg' : '/images/contact.jpg'} alt='Snow' />
          <div className={styles.center}>
            <h4><i className="fas fa-home"></i> Baluwatar, Kathmandu</h4>
            <h4><i className="fas fa-envelope"></i> sirjeettamrakar007@gmail.com</h4>
            <h4><i className="fas fa-phone-square-alt"></i> 9860913929</h4>
          </div>
        </div>
        <form data-aos="zoom-in-left" className={`mx-auto ${styles.w}`} onSubmit={sendEmail}>
            <h2 className={styles.head}>Contact</h2>
            <input className={styles.input} title='Name' name='name' type='text' placeholder='Your Name' required/>
            <input className={styles.input} title='Email' name='email' type='email' placeholder='Your Email' required />
            <input className={styles.input} title='Subject' name='subject' type='text' placeholder='Subject' required/>
            <textarea className={styles.input} title='Message' name='message' type='text' placeholder='Message' required/>
            <button className={`btn btn-danger ${styles.submit}`} type='submit' onClick={() => done()}>Send Email</button>
          </form>
        </div>
        <div className={styles.bg} />
      </div>
    </>
)}

export default contact;