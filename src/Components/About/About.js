/*****************************************************************************/
/*!
\file About.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import React from 'react'
import './About.css'
import { Button } from '../Interaction/Button'


function About()
{
    const goToContact = () =>
    {
        var email = "theonteo96@gmail.com";
        var mailto_link = 'mailto:' + email;
        window.open(mailto_link, 'emailWindow');
    };

    return (
        <>
            <div className='AboutContainer'>
                <div className='LeftPanel'>
                    
                <div className='SubTitle'> ../ 01. About Me /</div>
                    <div className='Title'>Building Simplicity.</div>
                    <div class="line"></div>
                    <div className='SubTextBold'>Hi, Theon here!
                    </div>
                    <div className='SubText'>
                        I am currently pursuing software engineering and development with a focus in <b>front-end aspects.</b>
                        My current interests are in <b>Front-End Graphics Rendering and Full-stack development.</b>
                    </div>

                    <div className='AboutButtonsContainer'>
                        <div className='AboutButtons'>
                            <Button buttonStyle='btn--outline' onClick={goToContact}><i class="far fa-envelope"></i> Get In Touch!</Button>
                        </div>
                        <Button buttonStyle='btn--outline'
                            externalLink={true}
                            path={'resume.pdf'}>
                                <i class="fas fa-external-link-alt"></i> Check out Resume</Button>
                        <div className='AboutButtons'>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default About;