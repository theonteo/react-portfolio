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
                    <div className='page-text'>

                    </div>
                </div>
            </div>
        </>

    );
}