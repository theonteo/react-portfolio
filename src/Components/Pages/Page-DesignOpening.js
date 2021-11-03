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

import ImgDev1 from '../../Images/PortfolioDev/dev1.jpg'
import ImgDev2 from '../../Images/PortfolioDev/dev2.jpg'
import ImgDev3 from '../../Images/PortfolioDev/dev3.jpg'
import ImgDev4 from '../../Images/PortfolioDev/dev4.jpg'
import ImgDev5 from '../../Images/PortfolioDev/dev5.jpg'
import ImgDev6 from '../../Images/PortfolioDev/dev6.jpg'
import ImgDev7 from '../../Images/PortfolioDev/dev7.jpg'
import ImgDev8 from '../../Images/PortfolioDev/dev8.jpg'
import ImgDev9 from '../../Images/PortfolioDev/dev9.jpg'
import ImgDev10 from '../../Images/PortfolioDev/dev10.jpg'
import ImgDev11 from '../../Images/PortfolioDev/dev11.jpg'

export default function ProjectDesignOpening()
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
                        Designing an introduction sequence<c>.</c>
                    </div>
                    <div className='page-label'>
                        A blog on the creation of the website you're viewing now
                    </div>
                   
                    <div className='page-bold'>
                        Designing the introduction
                    </div>

                    <div className='page-text'>
                        After the website is being a setup, a 3d background comes to mind as an opening to the website.
                        Various assets, lighting and styles are being explored before setting for a cyan-neon colour scheme.
                    </div>

                    <div className='page-bold-nospace'>
                        Experiments with lightmaps for lighting
                    </div>
                    <div class="page-img">
                        <img src={ImgDev1} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                    <div class="page-img">
                        <img src={ImgDev2} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                    <div className='page-bold-nospace'>
                        Trimming the fat
                    </div>
                    <div className='page-text'>
                      As more models are being added , I realised that the load time of the website is increasing bit by bit. Hence it was decided
                      to keep the polygon count low. Only 1 texture map is used as a lightmap to light the entire scene.
                    </div>
                    <div class="page-img">
                        <img src={ImgDev3} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                    <div className='page-bold-nospace'>
                      Lighting Passes
                    </div>
                    <div className='page-text'>
                     Different lighting colors and angles are tested.
                    </div>
                    <div class="page-img">
                        <img src={ImgDev4} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                    <div className='page-bold-nospace'>
                     Shadow Cards
                    </div>
                    <div class="page-img">
                        <img src={ImgDev5} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                    <div className='page-bold-nospace'>
                     Typography
                    </div>


                    <div className='page-text'>
                     A version of title card would include an overlay being place in the entire of the viewport.
                     After initial feedback
                    </div>
                    <div class="page-img">
                        <img src={ImgDev6} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                    <div className='page-bold-nospace'>
                     Camera Planning
                    </div>
                    <div class="page-img">
                        <img src={ImgDev7} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                    <div className='page-text'>
                        After the website is being a setup, a 3d background comes to mind as an opening to the website.
                        Various assets,lighting and styles are being explored before setting for a cyan-neon colour scheme.
                    </div>


                    <div className='page-text'>Want to see more?</div>
                    <Button buttonStyle='btn--outline' path='/' onClick={goToTop} > <i class="fas fa-sign-in-alt"></i> Return to Home Page</Button>
                    <div className='page-text'></div>



                </div>
            </div>
        </>

    );
}