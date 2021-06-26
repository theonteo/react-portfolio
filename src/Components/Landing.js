import React from 'react'
import LandingTitle from './LandingTitle'
import Scene_1 from './Scenes/Scene_1'
import './Landing.css'


function Landing()
 {
    return (
        <div className = 'landingContainer'>
            <div className = "RenderWindow">
                <Scene_1/>
                <div className = "SideBar">
                    <LandingTitle/>
                </div>
            </div>
            <div className = "RenderWindow">
                <Scene_1/>
                <div className = "SideBar">
                    <LandingTitle/>
                </div>
            </div>
        </div>
    )
}

export default Landing
