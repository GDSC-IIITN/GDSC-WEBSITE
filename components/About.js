import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.about}>
        <div className={styles.content}>
          <div className={styles.Headername}>
            <div className={styles.g}>G</div>
            <div className={styles.o}>o</div>
            <div className={styles.oo}>o</div>
            <div className={styles.gg}>g</div>
            <div className={styles.auto}>
              <div className={styles.l}>l</div>
              <div className={styles.e}>e</div>
            </div>
            <div className={styles.develo}>Developer Student Clubs</div>
          </div>

          <div className={styles.paragdc}>
            {" "}
            are an Organization for university students who want to bring about
            a change through technology. We are focused upon building technical
            and non-technical skills, which would help students to build a
            better community.
            <br />
            <br />
            By joining a GDSC, students grow their knowledge in a peer-to-peer
            learning environment and build solutions for local businesses and
            their community.
          </div>
          <div className={styles.Buttondng}>More Info</div>
        </div>
        <div className={styles.intro}>
        <img src="intro-shape.svg.svg" alt="#"  />
        </div>
 
      </div>
    </div>
  );
};

export default About;
