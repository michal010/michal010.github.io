import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaYoutube, FaGithub, FaDiscord } from 'react-icons/fa'

function Footer() {
    return (
        <>
        <div className='footer'>
            <div className='footer-container'>
                <Link className='footer-item' to = {'//github.com/michal010?tab=repositories'} target ="_blank">
                    <FaGithub className='footer-icon' />
                </Link>
                <Link className='footer-item' to = {'//www.youtube.com/channel/UCUYAizGeDTElyQSDsR4c4Qg'} target = '_blank'>
                    <FaYoutube className='footer-icon' />
                </Link>
                <Link className='footer-item'>
                    <FaDiscord className='footer-icon' />
                </Link>
            </div>
        </div>
        </>
    )
}

export default Footer
