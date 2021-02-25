import React from 'react';
import Article from '../Article';
import { projectObjOne } from './Data';
import { projectObjTwo } from './Data';

function Projects() {
    return (
      <>
        <Article {...projectObjOne} />
        <Article {...projectObjTwo} />
      </>
    );
  }
  
  export default Projects;