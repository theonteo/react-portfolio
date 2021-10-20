import React from 'react'
import '../../App.css'
import './Pages.css'
import { Button } from '../Interaction/Button'
import ImgSimple from '../../Images/img-engine.jpg'
import ImgBeauty from '../../Images/img-beauty.jpg'

export default function ProjectSimple()
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
                    <div className='page-bold'>
                        Simple Engine Technical Showcase 2021
                    </div>
                    <iframe title = 'rendertest' width src="https://www.youtube.com/embed/jCnMN9iv688"></iframe>
                    <div className='page-image-tag'>
                        First 3D Render Test for Simple Engine 2021.
                    </div>
                    <div className='page-text'>

                    </div>
                    <div className='page-bold'>
                        Features of Simple Engine
                        <li>Entity Component System</li>
                        <li>Navigation Mesh and A* Pathfinding</li>
                        <li>Complex Material Shading and Lighting</li>
                        <li>Skinned Animations and Interpolation</li>
                        <li>Finite State Machine Editor</li>
                        <li>C# Scripting</li>
                        <li>FMOD Integration</li>
                        <li>And More...</li>
                    </div>
                    <div className='page-bold'>
                        Own developed features for the engine
                    </div>
                    <div class="project-img">
                        <img src={ImgBeauty} alt="" />
                    </div>
                    <div className='page-image-tag'>
                       Test render in engine.
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
                    <div className='page-bold'>
                        Mesh Painting
                    </div>

                    <div className='page-text'>
                        To speed up environment creation, mesh painting brush features were added to complement existing graphical features.
                        </div> 
                        <div className='page-text'>
                        Such painting features would include:
                        <li>Vertex Position Painting</li>
                        <li>Vertex Color Painting</li>
                        <li>Mesh geometry painting</li>
                        Mesh Painting demo video below.
                    </div> 
                    <iframe title = 'rendershading' width src="https://www.youtube.com/embed/oV1LBBaEWfA"></iframe>
                    <div className='page-bold'>
                        Shading and Lighting
                    </div>
                    <iframe title = 'rendertechnical' width src="https://www.youtube.com/embed/0BT9SjFj0OU"></iframe>
                    <div className='page-bold'>
                        Technical Art
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