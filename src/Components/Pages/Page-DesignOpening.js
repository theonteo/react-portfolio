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
                        Ideation
                    </div>
                    <div className='page-text'>
                        While shopping around for website ideas. <a href='https://threejs-journey.com/' >A website</a> by a particular developer sparked an idea to render a 3d background.
                        Three.js is then used to bring the idea to life, with maya being the primary modelling tool and Arnold renderer to bake the lightmaps.
                    </div>
                    <div className='page-text'>
                        After the initial website setup, the 3d background would slowly transform to become the opening to the website.
                        Various assets, lighting and styles are being then explored before setting for a cyan-neon colour scheme.
                    </div>

                    <div className='page-bold-nospace'>
                        Experimenting with lightmaps for lighting
                    </div>
                    <div class="page-img">
                        <img src={ImgDev1} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                    <div className='page-bold-nospace'>
                        Initial Modelling pass
                    </div>
                    <div class="page-img">
                        <img src={ImgDev2} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                    <div className='page-bold'>
                        Trimming the fat
                    </div>
                    <div className='page-text'>
                        As more models are being added ,load times of the website slowly increased. Hence it was decided
                        to keep the polygon count low to reduce the file size, with only 1 light map being used to light the entire scene.
                    </div>
                    <div class="page-img">
                        <img src={ImgDev3} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                    <div className='page-bold'>
                        Lighting Passes
                    </div>
                    <div className='page-text'>
                        Different lighting colors and angles are tested.
                    </div>
                    <div class="page-img">
                        <img src={ImgDev4} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>

                    <div className='page-bold'>
                        Loading asset into the website
                    </div>
                    <div className='page-text'>
                        Once the asset is imported to the website,a good amount of time is being spent trying figure out a good composition to place title text with asset.
                        The first pass consist of the screen being separated into two parts.The left
                        would be the title with the right being the viewport.
                        However it is more impactful to have the viewport cover the entire screen.
                    </div>
                    <div class="page-img">
                        <img src={ImgDev8} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                    <div className='page-image-tag'>
                        Initial ui.
                    </div>
                    <div class="page-img">
                        <img src={ImgDev9} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                    <div className='page-image-tag'>
                        Second version.
                    </div>

                    <div class="page-img">
                        <img src={ImgDev10} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                    <div className='page-text'>
                        A version of title card would include an overlay being place in the entire of the viewport.
                    </div>
                    <div className='page-image-tag'>
                        Revision mock up by Kenneth Teo.
                    </div>
                    <div class="page-img">
                        <img src={ImgDev6} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                   
                    <div className='page-text'>
                        The final version would consist of the title words being diagetic and modelled into the assets themselves .
                    </div>

                    <div className='page-bold'>
                        Camera Planning
                    </div>
                    <div className='page-text'>
                        Camera positions are planned in a 3d modelling software before transfering the positions over to the website.
                        The red cubes would be the camera path with the green cube being be the look-at position.
                    </div>
                    <div class="page-img">
                        <img src={ImgDev7} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>

                    <div className='page-bold'>
                        Final Version
                    </div>
                    <div className='page-text'>
                        After some scene clean up and final lighting adjustments ,this is the final asset being used in the website.
                    </div>
                    <div class="page-img">
                        <img src={ImgDev11} alt="" style={{ filter: 'grayscale(0%)' }} />
                    </div>


                    <div className='page-text'>Want to see more?</div>
                    <Button buttonStyle='btn--outline' path='/' onClick={goToTop} > <i class="fas fa-sign-in-alt"></i> Return to Home Page</Button>
                    <div className='page-text'></div>



                </div>
            </div>
        </>

    );
}