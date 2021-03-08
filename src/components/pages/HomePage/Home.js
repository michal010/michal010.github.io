import React from 'react'
import './Home.css';
import {homeData } from './Data';
import {CircleProgress} from 'react-gradient-progress'

import unityLogo from '../Shared/unityLogo.png'
import csharpLogo from '../Shared/C_Sharp_logo.svg'
import blenderLogo from '../Shared/blender_logo.png'
import cppLogo from '../Shared/cpp_logo.png'
import inkScapeLogo from '../Shared/inkscape-logo.svg'
import vsLogo from '../Shared/VisualStudioLogo.svg'
import materializeLogo from '../Shared/MaterializeLogo.png'
import gimpLogo from '../Shared/gimpLogo.png'
import {ImageLogo} from './ImageLogo'

import SkillBar from 'react-skillbars'

const skills = [
    {type: "Unity", level: 80},
    {type: "C#", level: 70},
    {type: "C++", level: 40},
    {type: "Blender", level: 20},
    {type: "Inkscape", level: 35}
];

const colors = {
    "bar": {
      "hue": 159,
      "saturation": 100,
      "level": {
        "minimum": 0,
        "maximum": 70
      }},
      "title": {
        "text": {
          "hue": 45,
          "saturation": {
            "minimum": 70,
            "maximum": 30
          },
          "level": 50
        }
      }
    
    }

function Home() {
    return (
        <>
        <div classname='home-container'>
        
            <div className='home-row'>
                <div className='home-col'>
                    <div className='home-helloworld'>{homeData.helloworld}</div>
                    <div className='home-introduction'>{homeData.introduction}...</div>
                    <div className='home-description'> {homeData.description}</div>
                </div>
                <div className='home-col'>
                    <div className='home-skill-section'>
                        <SkillBar skills={skills} colors = {colors} height={15}/>

                    </div>
                    
                </div>
            </div>
            <div className='home-row'>

            </div>
            <div className='home-row'>
            <div className='home-skill-section'>
                    <img src ={unityLogo} width='200px'></img>
                        <img src ={blenderLogo} width='200px'></img>
                        <img src ={inkScapeLogo} width='100px'></img>
                        <img src ={vsLogo} width='100px'></img>
                        <img src ={materializeLogo} width='100px'></img>
                        <img src ={gimpLogo} width='100px'></img>
                    </div>
            </div>


        </div>
        </>
    )
}

export default Home
