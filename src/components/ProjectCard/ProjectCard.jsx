import React from "react";
import { projectsArr } from "../../data/projectData";
import styles from "./ProjectCard.module.scss";
import { ReactComponent as GitHub } from "../../assets/svgs/logo-github.svg";

import screen0 from "../../assets/images/screenDada.jpg";
import screen1 from "../../assets/images/screenBeer.jpg";
import screen2 from "../../assets/images/screenCalc.jpg";
import screen3 from "../../assets/images/screenMoai.jpg";

const ProjectCard = (props) => {

  const { visibleProject, setVisibleProject } = props;

  const screenJSX = (screenNumber) => {
    switch (screenNumber) {
      case 0: return screen0;
      case 1: return screen1;
      case 2: return screen2;
      case 3: return screen3;
      default: return screen0;
    }
  }

  const incVisibleProject = () => {
    if(visibleProject===projectsArr.length-1){
      setVisibleProject(0);
    }else{
      setVisibleProject(visibleProject => visibleProject + 1);
    }
  }

  const decVisibleProject = () => {
    if(visibleProject===0){
      setVisibleProject(projectsArr.length-1);
    }else{
      setVisibleProject(visibleProject => visibleProject - 1);
    }
  }

  const prevImageJSX = () => {
    if (visibleProject === 0) {
      return <img src={screenJSX(projectsArr.length-1)} alt={projectsArr[projectsArr.length - 1].alt}/>
    } else {
      return <img src={screenJSX(visibleProject-1)} alt={projectsArr[visibleProject - 1].alt}/>
    }
  }
  const nextImageJSX = () => {
    if (visibleProject === projectsArr.length-1) {
      return <img src={screenJSX(0)} alt={projectsArr[0].alt}/>
    } else {
      return <img src={screenJSX(visibleProject+1)} alt={projectsArr[visibleProject + 1].alt}/>
    }
  }




  return (
    <div className={styles.cardContainer}>
      <h3>{projectsArr[visibleProject].title}</h3>
      <div className={styles.centerSection}>
        <div onClick={decVisibleProject} className={styles.smallScreenShot}>{prevImageJSX()}</div>
        <div className={styles.screenShot}>
          <a href={projectsArr[visibleProject].liveSrc}><img src={screenJSX(visibleProject)} alt={projectsArr[visibleProject].alt} /></a>
        </div>
        <div onClick={incVisibleProject} className={styles.smallScreenShot}>{nextImageJSX()}</div>
      </div>

      <div className={styles.links}>
        <a href={projectsArr[visibleProject].liveSrc}>LIVE</a>
        <a href={projectsArr[visibleProject].codeSrc}>CODE</a>
      </div>
    </div >
  );
};

export default ProjectCard;
