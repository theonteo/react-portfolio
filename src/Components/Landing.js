import React from 'react'
import LandingTitle from './LandingTitle'
import RenderWindow from './RenderWindow'
import './Landing.css'
function Landing()
 {
    return (
            <div className = "RenderWindow">
                <RenderWindow/>
                    <div className = "SideBar">
                <LandingTitle/>
                </div>
        </div>
    )
}

export default Landing
