import React, {Component, useRef, useEffect} from 'react';
import Article from '../Article';
import ProjectsNavbar from './ProjectsNavbar'
import { projectObjOne, projectObjTwo, projectObjThree } from './Data';
import './Projects.css';


function Projects() {
    return (
      <>
        <ProjectsNavbar/>
        
        <div className = 'articles-container'>

        <Article {...projectObjOne}/>
        <Article {...projectObjTwo}/>
        <Article {...projectObjThree}/>        
        </div>
      </>
    );
  }
  
  export default Projects;