import React from 'react'
import '../../App.css'
import './Pages.css'

import ImgSimple from '../../images/img-engine.jpg'


export default function ProjectSimple()
{

    return (
        <>
        <div className = 'page-background'>
            <div className = 'page-container'>
                <div className = 'page-title'>
                    SIMPLE. Engine
                </div>
                <div className = 'page-label'>
                    A blog on the creation of our 3D engine
                </div>
                <div className = 'page-text'>
               Work in Progress...
                </div>
                <div class="project-img">
                    <img src={ImgSimple} alt="" />
                </div>
                <div className = 'page-text'>
               
                </div>
            </div>
        </div>
        </>
        
    );
}