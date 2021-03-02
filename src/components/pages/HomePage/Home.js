import React from 'react'
import './Home.css';
import {homeDataPL } from './Data';

function Home() {
    return (
        <>
        <div classname='home-container'>
            <div className='home-row'>
                <div className='home-col'>
                    <div className='home-helloworld'>{homeDataPL.helloworld}</div>
                    <div className='home-introduction'>{homeDataPL.introduction}...</div>
                    <div className='home-description'> {homeDataPL.description}</div>
                    <div className='home-description'> {homeDataPL.description2}</div>
                </div>
                <div className='home-col'>
                    <div className='home-code-image-wrapper'>
                        
                    </div>
                </div>
                
            </div>


        </div>
        </>
    )
}

export default Home
