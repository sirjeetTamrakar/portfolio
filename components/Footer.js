import React from "react";
import styles from "../styles/Navbar.module.css";

const Footer = () => {
  return (
    <>
      <div id="contact" className={`${styles.footer} px-4`}>
        <div className={styles.icon}>
          <a
            href="https://github.com/sirjeetTamrakar"
            target="blank"
            className={styles.a}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sirjeet-tamrakar-473b11214/"
            target="blank"
            className={styles.a}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className={styles.phone}>
          <h6 className={styles.i}>
            <i className="fas fa-phone-alt"></i>&nbsp;&nbsp;9860913929
          </h6>
          <h6 className={styles.i}>
            <i className="fas fa-home"></i>&nbsp;&nbsp; Baluwatar, Kathmandu
          </h6>
          <h6 className={styles.i}>
            <i className="fas fa-envelope"></i>&nbsp;&nbsp;
            sirjeettamrakar007@gmail.com
          </h6>
        </div>
        <div className="mt-4">Made With</div>
        <i
          className="devicon-nextjs-original-wordmark"
          style={{ fontSize: "4rem" }}
        ></i>
      </div>
    </>
  );
};

export default Footer;
