import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div id="about" className={styles.main}>
      {/* <h1 className={styles.head}>ABOUT ME</h1>
      <h3
        data-aos="zoom-in-up"
        data-aos-once="true"
        className={styles.about}
      >{`Hello! This is Srijeet Tamrakar. I have been learning full stack web development for the past 3 years. I am a self taught web developer constantly learning new things and growing everyday. I hope to see myself working with you. Cheers!`}</h3> */}
      <h1 style={{ marginTop: "4rem" }}>INTERESTS</h1>
      <div
        data-aos="zoom-in-up"
        data-aos-once="true"
        data-aos-offset="20"
        className={styles.interest}
      >
        <div className={styles.icon}>
          <i className="fas fa-guitar"></i>
          <h4>Guitar</h4>
        </div>
        <div className={styles.icon}>
          <i className="fas fa-gamepad"></i>
          <h4>Games</h4>
        </div>
        <div className={styles.icon}>
          <i className="fas fa-dumbbell"></i>
          <h4>Workout</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
