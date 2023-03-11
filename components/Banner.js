import React from "react";
import styles from "../styles/Banner.module.css";

const Banner = () =>{
    return(
        <div className={styles.bannerarea}>
        <img src="vector.png" className={styles.yellowcircle}></img>
        <img src="greencircle.png" className={styles.greencircle}></img>
        <div className={styles.writtenpart}>
            <div className={styles.bannerHead}>
                <b># Lets Learn, Grow and Innovate together</b>
            </div>
            <div className={styles.bannersubhead}>
            Presenting to you the different fields we guide into: WebDev, AppDev, ML, Design etc...
            </div>
        </div>
        <img src="bluecirlce.png" className={styles.bluecircle}></img>
        <img src="redcircle.png" className={styles.redcircle}></img>
        </div>
    )
}

export default Banner;