import React from 'react'
import './RenderWindow.css'
import { Button } from './NavBar/Button'
import Scene from '../Render/Scene'
function RenderWindow() {
    return (
        <div  className= 'render'>
            <div className= 'render-window'>
                <Scene/>
            </div>
            <div className= 'render-window-screen'>
            </div>
            <div className = "render-container">
                <Button buttonStyle='btn--outline' className = 'play-button'> <i className ='fas fa-mouse'></i> Scroll to continue</Button>

            </div>
        </div>
    )
}

export default RenderWindow
