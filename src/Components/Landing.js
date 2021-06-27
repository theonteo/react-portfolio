import React from 'react'
import LandingTitle from './LandingTitle'
import Scene_1 from './Scenes/Scene_1'
import Scene_2 from './Scenes/Scene_2'
import Scene_3 from './Scenes/Scene_3'
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
                <Scene_2/>
                <div className = "SideBar">
                    <LandingTitle/>
                </div>
            </div>
            <div className = "RenderWindow">
                <Scene_3/>
                <div className = "SideBar">
                    <LandingTitle/>
                </div>
            </div>
        </div>
    )
}

export default Landing
