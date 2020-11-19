import React, { useState, useEffect} from 'react';
import styles from "./Projects.module.scss";
import ProjectCard from "../ProjectCard";
import { projectsArr } from "../../data/projectData";


const Projects = () => {

  const [visibleProject, setVisibleProject] = useState(0);

  useEffect(() => {
    setVisibleProject(visibleProject);
  },[visibleProject])


  return (

    <>
      <header className={styles.subHeader}>
        <h2>Projects</h2>
      </header>

      <section>
        <p>Here are some of the projects I have worked on as part of the _nology Software Developer course.</p>
        <div className={styles.projectContainer}>
          <div className={styles.project}>
            <ProjectCard visibleProject={visibleProject} setVisibleProject={setVisibleProject}/>
          </div>
        </div>
        <div className={styles.description}>
        <p>{projectsArr[visibleProject].description}</p>
      </div>
      </section>

    </>
  );
};

export default Projects;
