import React from 'react'
import '../../App.css'
import './Pages.css'

import ImgSimple from '../../Images/img-engine.jpg'


export default function ProjectSimple()
{

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
                    <div className='page-bold'>
                        Simple Beginnings
                    </div>
                    <iframe width src="https://www.youtube.com/embed/jCnMN9iv688"></iframe>
                    <div className='page-image-tag'>
                        First 3D Render Test for Simple Engine 2021.
                    </div>
                    <div className='page-text'>

                    </div>
                    <div className='page-bold'>
                        Features of Simple Engine
                        <li>AI</li>
                        <li>Graphics</li>
                        <li>Entity Component System</li>
                    </div>
                    <div className='page-bold'>
                        Graphics and Technical Art
                    </div>
                    <div className='page-text'>
                        Through the project duration,there are multiple attempt to build unique features that will enhance fidelity of the environment.
                    </div>
                    <div className='page-text'>
                        Such features would include:
                        <li>Mesh Painting</li>
                        <li>Complex Material Shading</li>
                        <li>Reflection Probes</li>
                    </div>
                </div>
            </div>
        </>

    );
}