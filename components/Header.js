import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.heaader}>
        <div className={styles.image}>
          <img src="IIITN.svg" alt="#" />
        </div>
        <div className={styles.content}>
          <ul>
            <li>Follow US</li>
            <li>Events</li>
            <li>Our team</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className={styles.line}> </div>
    </div>
  );
};

export default Header;
