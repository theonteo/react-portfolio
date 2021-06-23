import React from 'react'
import './RenderWindow.css'
import { Button } from './NavBar/Button'
import ThreeScene from '../Render/3DScene'
function RenderWindow() {
    return (
        <div  className= 'render'>
            <div className= 'render-window'>
                <ThreeScene/>
            </div>
            <div className = "render-container">
                <Button buttonStyle='btn--outline' className = 'play-button'> <i className ='fas fa-mouse'></i> Scroll to continue</Button>

            </div>
        </div>
    )
}

export default RenderWindow
