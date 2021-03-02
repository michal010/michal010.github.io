import React from 'react';
import ScrollTo from 'react-scroll-into-view';
import './ProjectsNavbar.css';

function ProjectsNavbar() {
    return (
        <div className='projects-navbar'>
            <div className='projects-navbar-item'>
                <ScrollTo selector={'#Article1'}>
                    Cirpong
                </ScrollTo>
            </div>
            <div className='projects-navbar-item'>
                <ScrollTo selector={'#Article2'}>
                    Rule the furniture
            </ScrollTo>
            </div>
            <div className='projects-navbar-item'>
                <ScrollTo selector={'#Article3'}>
                    BillGuide
            </ScrollTo>
            </div>
        </div>
    )
}

export default ProjectsNavbar

