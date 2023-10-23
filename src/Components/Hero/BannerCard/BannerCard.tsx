import React from "react";
import styles from './BannerCards.module.scss'
import { LinkCreateProfile } from "../../../LinkCreateProfile";

export function BannerCard() {
  return (
    <div className={styles.bannerCard}>
      <h2 className={styles.bannerHeading}>Take the first step to finding your next healthcare job.</h2>
      <p className={styles.bannerDescr}>Explore thousands of job opportunities with all the information you need.</p>
      <LinkCreateProfile />
    </div>
  )
}