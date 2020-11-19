import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <>
      <header className={styles.subHeader}>
        <h2>About Me</h2>
      </header>

      <section>
        <p>I have just finished training as a Front-end Web Developer through an intensive 12-week course run by <a href="https://nology.io" alt="nology website">_nology</a>.</p>
        <p>I grew up in St. Helens, an industrial town in the  North West of England.
        I studied Computer Science in Leicester, spent a couple of years in Oxford and then migrated to London where I worked as a freelance writer for a few magazines before getting a job as Production Editor on the Daily Telegraph's website.</p><p>After 5 years at The Telegraph, I moved to the public sector, working at CSCI (now CQC) the Commission for Social Care Inspection, within the Communications department as a web developer specialising in Accessibility.</p>

        <p>After dabbling in Music Production, Game Development, Dog Boarding and Shelf Stacking, I am excited to dive back into the tech sector armed with a wide breadth of knowledge and skills from the course to add to my previous experience.</p>

      </section>

    </>

  );
};

export default About;
