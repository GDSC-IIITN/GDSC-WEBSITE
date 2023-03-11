import React from "react";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedinIn,
  faInstagram,
  faGithub,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.line}> </div>

      <div className={styles.tt}>
        <div className={styles.qul}>
          <img src="IIITN.svg" alt="#" />
        </div>
        <div className={styles.font}>
            <p>Follow us:</p>
          <a href="">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
