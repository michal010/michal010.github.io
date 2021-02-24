import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';
function Navbar(){
    return(
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
              <li className='nav-item'>
                <Link to='/' className='nav-links'>
                  O mnie
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Projects'
                  className='nav-links'
                >
                  Projekty
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Contact'
                  className='nav-links'
                >
                  Kontakt
                </Link>
              </li>
          </div>
        </nav>


      </>  
    );
}

export default Navbar