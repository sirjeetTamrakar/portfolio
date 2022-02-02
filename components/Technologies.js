import React from "react";
import styles from "../styles/Tech.module.css";
import { tech } from "../constants/constants";

const Technologies = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.head}>TECHNOLOGIES</h1>
      <div className={styles.items}>
        {tech.map(({ text, icon }, index) => (
          <div
            data-aos="zoom-in-down"
            data-aos-delay={100 + (index + 1) * 200}
            data-aos-once="true"
            key={text}
            className={styles.item}
          >
            <i className={icon} />
            <div className={styles.text}>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
