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
import ImgSimple from '../../Images/img-engine.jpg'

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
                        SIMPLE. Engine
                    </div>
                    <div className='page-label'>
                        A blog on the creation of our 3D engine
                    </div>
                    <div className='page-bold'>
                        Simple Beginnings
                    </div>
                    <div className='page-text'>
                        Simple Engine is a Proprietary 3D engine built to some run some of our 3D software projects.
                        Development for the engine began in 2019 and has since been through multiple iterations before the current version you will see below.
                    </div>
                    <div class="project-img">
                        <img src={ImgSimple} alt="" />
                    </div>
                    <div className='page-image-tag'>
                        Editor interface of Simple Engine 2020.
                    </div>
                    
                    <iframe title = 'render' width src="https://www.youtube.com/embed/jCnMN9iv688"></iframe>
                    <div className='page-text'>Want to see more?</div>
                    <Button buttonStyle='btn--outline' path='/'  onClick={goToTop} > Return to Home Page</Button>
                    <div className='page-text'></div>
                </div>
            </div>
        </>

    );
}