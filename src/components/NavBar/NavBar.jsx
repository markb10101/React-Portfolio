import React from "react";
import styles from "./NavBar.module.scss";
import {ReactComponent as ContactIcon} from "../../assets/svgs/contact.svg";

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <h1>MARK BIRCHALL</h1>
      <span className={styles.contact}><a href="mailto:mark.birchall@gmail.com"><ContactIcon/></a></span>

    </div>

  );
};

export default NavBar;
