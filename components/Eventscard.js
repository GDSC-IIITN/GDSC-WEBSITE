import React from "react";
import styles from "../styles/EventsCard.module.css";

const EventsCards = (props) =>{
    return(
        <div className={styles.card}>
            <table className={styles.table}>
            <tbody>
                <tr suppressHydrationWarning>
                    <td className={styles.td}>
                    <div className={styles.carditem} >
                    <div className={styles.cardpic} >
                    <img src={props.img} width="94%"></img>
                </div>
                <div className={styles.head } > 
                    {props.head}
                </div>
                </div>
                    </td>
                </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default EventsCards