import React from 'react'
import LandingTitle from './LandingTitle'
import RenderWindow from './RenderWindow'
import './Landing.css'


function Landing()
 {
    return (
        <div className = 'landingContainer'>
            <div className = "RenderWindow">
                <RenderWindow/>
                <div className = "SideBar">
                    <LandingTitle/>
                </div>
            </div>
        </div>
    )
}

export default Landing
