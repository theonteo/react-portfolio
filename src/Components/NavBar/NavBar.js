/*****************************************************************************/
/*!
\file NavBar.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import logo from '../../Images/logo.png'

function NavBar()
{

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => 
    {
        document.documentElement.scrollTop = 0;
        setClick(false);
    };
    const goToContact = ()=>{
        var email = "theonteo96@gmail.com";
        var mailto_link = 'mailto:' + email;
        window.open(mailto_link, 'emailWindow');
      };
    const showButton = () =>
    {
        if (window.innerWidth <= 960)
        {
            setButton(false);
        } else
        {
            setButton(true);
        }
    }

    useEffect(() =>
    {
        showButton();
    }, [button]);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={logo} alt='' className="logo"></img>
                    </Link>

                    <div className='menu-icon'
                        onClick={handleClick}>
                        <i className=
                            {click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                <div className="nav-links-white">01. </div> Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a href='https://github.com/theonteo?tab=repositories' to='/' className='nav-links' onClick={closeMobileMenu}>
                                <div className="nav-links-white">02. </div> Github
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='resume.pdf' to='/' className='nav-links' onClick={closeMobileMenu}>
                                <div className="nav-links-white">03. </div> Resume
                            </a>
                        </li>
                        <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={goToContact}>
                                <div className="nav-links-white">04. </div> Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
