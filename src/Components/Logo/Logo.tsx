import React from "react";
import styles from './Logo.module.scss';
import vivianLogo from '../../assets/images/logo.png';

interface ILogoProp {
  name: string;
};

export function Logo({ name }: ILogoProp) {
  switch (name) {
    case ('vivian'):
      return (
        <a href="#ds" className={styles.logo}>
          <img src={vivianLogo} alt="logo" />
        </a>
      )
      default: return <a href="#home">Logo</a>
  }
};