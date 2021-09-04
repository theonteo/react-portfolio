import React from 'react'
import Scene1 from './Scenes/Scene1'
import Scene2 from './Scenes/Scene2'
import Projects from './Projects'
import About from './About'
import './Landing.css'



function Landing()
{
    return (
        <div className='landingContainer'>
            <div className="RenderIntro">
                <div className="RenderWindow1">
                    <Scene1 />

                </div>
            </div>
            <div className='contentContainer'>
                <div className="RenderWindow2">
                    <Scene2 />
                    <div className="SideBarAbout">
                        <About />
                    </div>
                </div>

                <div className="RenderProjects">
                    <div className="render-blank">
                        <div className="Projects">
                            <Projects />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        /*
                <div className = 'landingContainer'>
            <div className = "RenderWindow">
                <Scene1/>
                <div className = "SideBar">
                    <LandingTitle/>
                </div>
            </div>
            <div className = "RenderWindow">
                <Scene2/>
                <div className = "SideBar">
                    <About/>
                </div>
            </div>
            <div className = "RenderProjects">
                <div className = "render-blank">
                    <div className = "Projects">
                        <Projects/>
                        </div>
                </div>
            </div>
            
        </div>
        */
    )
}

export default Landing
