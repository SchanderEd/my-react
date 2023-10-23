import React from "react";
import styles from './Header.module.scss';
import { NavMenu } from "./NavMenu";
import { Auth } from "./Auth";
import { Logo } from "../Logo";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo name="vivian"/>
        <NavMenu />
        <Auth />
      </div>
    </header>
  )
}