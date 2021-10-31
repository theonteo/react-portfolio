/*****************************************************************************/
/*!
\file Project-Simple.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import React from 'react'
import '../../App.css'
import './Pages.css'
import { Button } from '../Interaction/Button'

export default function ProjectPortfolio()
{
    const goToTop = ()=>{
        document.documentElement.scrollTop = 0;
      };
    return (
        <>
            <div className='page-background'>
                <div className='page-container'>
                    <div className='page-title'>
                        Building a portfolio site
                    </div>
                    <div className='page-label'>
                        A blog on the creation of the website you're viewing now
                    </div>
                    <div className='page-bold'>
                        Work In Progress.
                    </div>
                    
                    <div className='page-text'>Want to see more?</div>
                    <Button buttonStyle='btn--outline' path='/'  onClick={goToTop} > Return to Home Page</Button>
                    <div className='page-text'></div>
                </div>
            </div>
        </>

    );
}