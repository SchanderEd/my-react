import React from "react";
import styles from './LinkCreateProfile.module.scss';
import { Icon } from "../Components/Icon";

export function LinkCreateProfile() {
  return (
        <a href="#link" className={styles.linkCreateProfile}>
          Create a free profile
          <Icon name="linkArrow"/>
        </a>
    )
}