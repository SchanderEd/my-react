import React from "react";
import styles from './Auth.module.scss';

export function Auth() {
  return (
    <div className={styles.authBlock}>
      <button className={styles.loginButton}>Log in</button>
      <button className={styles.registerButton}>Join Vivian</button>
    </div>
  )
}