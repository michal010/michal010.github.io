import React from 'react'
import './About.css';
import Projects from './Projects/Projects';


function About(){
    return(
      <>
      <div className = 'about'>
        <div className='header'>
          <p>Hello, I am</p>
          Michał Popielarz
        </div>
        <div className='content'>
          Self-taught C# Unity Developer
        </div>
      </div>
      </>  
    );
}

export default About