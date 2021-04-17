import React from 'react'
import './Home.css';
import './Starwars.css';
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

import SkillBars from 'react-skills'
import SkillBar from 'react-skillbars'

import PaperTosser from './../../../unity/gameviews/PaperTosser'





const state = {
  View1: false
}

const skills = [
    {type: "Unity", level: 80},
    {type: "C#", level: 70},
    {type: "C++", level: 40},
    {type: "Blender", level: 20},
    {type: "Inkscape", level: 35}
];
const skillsData = [
  {name: "Unity", level: 80, color: '#EBD71C', img: unityLogo, width: 50, height: 50},
  {name: "C#", level: 70, color: '#EBD71C', img: csharpLogo},
  {name: "C++", level: 40, color: '#EBD71C', img: cppLogo, width: 91, height: 103},
  {name: "Inkscape", level: 35, color: '#EBD71C', img: inkScapeLogo, width: 91, height: 103},
  {name: "Blender", level: 20, color: '#EBD71C',img: blenderLogo, width: 91, height: 103}
  
];

const colors = {
    "bar": {
      "hue": 179,
      "saturation": 70,
      "level": {
        "minimum": 30,
        "maximum": 80
      }
    },
      "title": {
        "text": {
          "hue": 705,
          "saturation": {
            "minimum": 70,
            "maximum": 30
          },
          "level": 50
        },
        "background": "#46465e"
      },
      
    
    }

    function handleClick()
    {
      state.view1 = true;
    }

    function StarWars(){
      return(
        <>
          <div class="star-wars-intro">
            <p class="intro-text">
              Witaj Świecie!
            </p>

            <h2 class="main-logo">
              TEST
            </h2>


            <div class="main-content">

              <div class="title-content">
                <p class="content-header">...nazywam się<br />Michał Popielarz</p>
                    {homeData.introduction}{homeData.description}
              </div>
            </div>
          </div>
        </>
      )
    }

    function NewView()
    {
      return(
        <>
        <div className='home-container'>
        <div className='home-row'>

          <div className='home-col'>
          <div class="star-wars-style">

            <div className='main-content'>
            <p class="intro-text">
              Witaj Świecie!
            </p>
                <p class="content-header">nazywam się<br />Michał Popielarz...</p>
                ...Jestem osobą kreatywną, twórczą, myślącą "out of the box" - gdy umiejętności pozwolą
                rozwiązanie przyjdzie z czasem. Przygodę z programowaniem zacząłem w 2
                {homeData.description}
            </div>
          </div>
              <div className='home-centralized'>
                    {ProgramsIUse()} 
                  </div>
          </div>

          <div className='home-col'>
              <div className='home-test-container'>
            <div className='home-test'>
              Moje umiejętności:
              <div className='home-skillbar-container'>
                  <SkillBars skills={skillsData} barsHeight={40} customLabels={CustomLabels} />
                </div>
              </div>
            
            </div>
          </div>
        </div>
        </div>
        </>
      )
    }

    function MainView()
    {
      return(
        <>
          <div className='home-section'>
            <div className='home-fade'>
              <div className='home-centralized'>
                <div className='home-about-container'>
                <div className='home-about-header'>
                  {homeData.helloworld}
                </div>
                <div className='home-about-description'>
                {homeData.introduction}{homeData.description}
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className='home-section'>
              <div className='home-centralized'>
                <div className='home-section-header'>

                  Moje umiejętności:
                </div>
                <div className='home-skillbar-container'>
                  <SkillBars skills={skillsData} barsHeight={50} customLabels = {CustomLabels} />
                </div>
                {ProgramsIUse()}
              </div>
          </div>
        </>
      )
    }

function CustomLabels(skillsData){
  return(
    <>
    <div className='home-skill-bar'>
    <div className='home-skill-bar-image'>
      <img src={skillsData.img} ></img>
    </div>
    
    </div>
    </>
  )
}

function ProgramsIUse()
{
  return(
    <>
    <div className='starwars-title'>
      Programy, które używam:
    </div>
      <div className='home-skillimgs-container'>
      <div className='home-skill-program-image'>
          <img src={unityLogo} width=''></img>
        </div>
        <div className='home-skill-program-image'>
          <img src={blenderLogo} width=''></img>
        </div>
        <div className='home-skill-program-image'>
          <img src={inkScapeLogo} width=''></img>
        </div>
        <div className='home-skill-program-image'>
          <img src={vsLogo} width=''></img>
        </div>
        <div className='home-skill-program-image'>
          <img src={materializeLogo} width=''></img>
        </div>
        <div className='home-skill-program-image'>
          <img src={gimpLogo} width=''></img>
        </div>
      </div>
    </>
  )
}

function Home() {
  if (state.View1) {
          
    return(
     StarWars()
    
    )
  }
  else{
    return(
      NewView()
    ) 
  }
    return (
        <>
        </>
    )
}

export default Home
