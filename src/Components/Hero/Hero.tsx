import React from "react";
import styles from './Hero.module.scss';
import { BannerCard } from "./BannerCard";

export function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.container}>
        <BannerCard />
      </div>
    </div>
  )
}