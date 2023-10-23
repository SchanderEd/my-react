import React from "react";
import styles from './NavMenu.module.scss'
import { Icon } from "../../Icon";

export function NavMenu() {
  return (
    <nav className={styles.navMenu}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#sd">Browse Jobs</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#sd">Locations</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#sd">For Employers</a>
        </li>
        <li className={styles.navItem}>
          <button className={styles.dropdownButton}>
            Resources
            <Icon name="dropdownIcon" />
          </button>
        </li>
      </ul>
    </nav>
  );
}