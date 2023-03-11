import React from 'react'
import styles from '../styles/Team.module.css'

const Team = () => {
  return (
    
      <div className={styles.team}>
        <h1>Our Team</h1>
        <p>Made the teams that made it all possible</p>
        <div>
            <div className={styles.firstgrid}>
                <div className={styles.box}>
                    <img src="teams.png" alt="" />
                    <h2>Srishti Pandey</h2>
                    <h3>GDSC Head</h3>
                </div>
                <div className={styles.box}>
                    <img src="teams.png" alt="" />
                    <h2>Srishti Pandey</h2>
                    <h3>GDSC Head</h3>
                </div> 
                <div className={styles.box}>
                    <img src="teams.png" alt="" />
                    <h2>Srishti Pandey</h2>
                    <h3>GDSC Head</h3>
                </div> 
                <div className={styles.box}>
                    <img src="teams.png" alt="" />
                    <h2>Srishti Pandey</h2>
                    <h3>GDSC Head</h3>
                </div>
            </div>
            <div className={styles.secondgrid}>
                <div className={styles.box}>
                    <img src="teams.png" alt="" />
                    <h2>Srishti Pandey</h2>
                    <h3>GDSC Head</h3>
                </div>
                <div className={styles.box}>
                    <img src="teams.png" alt="" />
                    <h2>Srishti Pandey</h2>
                    <h3>GDSC Head</h3>
                </div> 
                <div className={styles.box}>
                    <img src="teams.png" alt="" />
                    <h2>Srishti Pandey</h2>
                    <h3>GDSC Head</h3>
                </div> 
                <div className={styles.box}>
                    <img src="teams.png" alt="" />
                    <h2>Srishti Pandey</h2>
                    <h3>GDSC Head</h3>
                </div>
            </div>
        </div>
      </div>

  )
}

export default Team
