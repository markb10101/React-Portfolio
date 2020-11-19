import React from "react";
import styles from "./Photograph.module.scss";
import pageTop from "../../assets/images/pageTop.jpg"


const Photograph = () => {

  return (
    <figure className={styles.photoContainer}>
      <img className={styles.photo} src={pageTop} alt="Felton Common, Bristol" />
      <figcaption className={styles.caption}>Felton Common, Bristol (2010)</figcaption>
    </figure>
  );
};

export default Photograph;
