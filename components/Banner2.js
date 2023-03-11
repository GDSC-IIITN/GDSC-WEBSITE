import React from "react";
import styles from "../styles/Banner2.module.css"

const Banner2 = () =>{
    return(
        <div className={styles.banner}>
            <div className={styles.halfyellow}>
                <img src="yellowhalfc.png"/>
            </div>
            <div className={styles.text}>
                <b>We would love to hear from you!</b>
            </div>
            <div className={styles.redt}>
                <img src="redtriangle.png"></img>
            </div>
            <div className={styles.blues}>
                <img src="bluerectangle.png"></img>
                
            </div>
            <div className={styles.greens}>
                <img src="greensemi.png" className="greensemi" height="94px"></img>
                
            </div>
        </div>
    )
}

export default Banner2;