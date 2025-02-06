import type React from "react"
import styles from "./styles.module.css"

export const LiveWallpaper: React.FC = () => {
  return (
    <div className={styles.liveWallpaper}>
      <div className={styles.sun}></div>
      <div className={styles.cloud1}></div>
      <div className={styles.cloud2}></div>
      <div className={styles.cloud3}></div>
      <div className={styles.plane}></div>
      <div className={styles.mountain1}></div>
      <div className={styles.mountain2}></div>
    </div>
  )
}

