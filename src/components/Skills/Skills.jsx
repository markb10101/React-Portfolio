import React from "react";
import styles from "./Skills.module.scss";
import { ReactComponent as LogoAdobe } from "../../assets/svgs/logo-adobe.svg";
import { ReactComponent as LogoCSS3 } from "../../assets/svgs/logo-css3.svg";
import { ReactComponent as LogoGit } from "../../assets/svgs/logo-git.svg";
import { ReactComponent as LogoGitHub } from "../../assets/svgs/logo-github.svg";
import { ReactComponent as LogoHTML5 } from "../../assets/svgs/logo-html5.svg";
import { ReactComponent as LogoJS } from "../../assets/svgs/logo-javascript.svg";
import { ReactComponent as LogoReact } from "../../assets/svgs/logo-react.svg";
import { ReactComponent as LogoSass } from "../../assets/svgs/logo-sass.svg";


const Skills = () => {
  return (
    <>
      <header className={styles.subHeader}>
        <h2>Skills</h2>
      </header>
      <section>

        <p>I have gained skills covering a variety of applications, frameworks and toolsets.</p>
        <div className={styles.skillsContainer}>
          <div className={styles.skillsIcons}>
            <div>
              <div className={styles.icon}>
                <LogoHTML5 />
                <span>HTML5</span>
              </div>
              <div className={styles.icon}>
                <LogoCSS3 />
                <span>CSS3</span>
              </div>
              <div className={styles.icon}>
                <LogoJS />
                <span>ES6+</span>
              </div>
              <div className={styles.icon}>
                <LogoGit />
                <span>Git</span>
              </div>
              <div className={styles.icon}>
                <LogoGitHub />
                <span>Github</span>
              </div>
              <div className={styles.icon}>
                <LogoSass />
                <span>SCSS</span>
              </div>
              <div className={styles.icon}>
                <LogoReact />
                <span>ReactJS</span>
              </div>
              <div className={styles.icon}>
                <LogoAdobe />
                <span>Photoshop</span>
              </div>
            </div>
          </div>
        </div>
        <p>I have an in-depth knowledge of HTML5, CSS, Sass (SCSS), Javascript (ES6+) and ReactJS. I have a working knowledge of Firebase (BaaS), Git and Github and I am familiar with NodeJS, Angular and TypeScript. I have concentrated on Functional Programming and dabbled in class-based. I love VSCode. Aside from coding, I am proficient in Photoshop, a variety of audio editors and the usual office applications.</p>
      </section >
    </>
  );
};

export default Skills;
