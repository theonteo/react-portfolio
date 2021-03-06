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
export default function ProjectPrototype()
{
    const goToTop = () =>
    {
        document.documentElement.scrollTop = 0;
    };
    return (
        <>
            <div className='page-background'>
                <div className='page-container'>
                    <div className='page-image-tag'>
                        ../ Blog post /
                    </div>
                    <div className='page-title'>
                        Building a portfolio site<c>.</c>
                    </div>
                    <div className='page-label'>
                        A blog on the creation of the website you're viewing now
                    </div>
                    <div className='page-bold-nospace'>
                        The "Initial" Prototype
                    </div>
                    <div className='page-text'>
                        During the ideations phase, several ideas are being explored as to what format the portfolio would be in.
                        One of the idea would be a full blown game where you play as a roomba "cleaning up a codebase" while exploring various projects and easter eggs.

                        The idea is inspired by the portfolio of <a href='https://bruno-simon.com/' >bruno simon - a frontend developer</a> .
                    </div>
                    <div className='page-text'>
                        The game will be built with playcanvas, a web based game engine. This idea is quickly scrapped in favour of a proper website to learn frontend frameworks.

                    </div>
                    <div className='page-text'>
                        Thankfully the prototype <b>still exist</b> and you can play it below!
                    </div>

                    <iframe src="https://playcanv.as/p/bfb6df11/" title='play'></iframe>
                    <div className='page-label'>
                        Controls - WASD to move. | Only playable in desktop.
                    </div>


                    <div className='page-text'>Want to see more?</div>
                    <Button buttonStyle='btn--outline' path='/' onClick={goToTop} > <i class="fas fa-sign-in-alt"></i> Return to Home Page</Button>
                    <div className='page-text'></div>



                </div>
            </div>
        </>

    );
}