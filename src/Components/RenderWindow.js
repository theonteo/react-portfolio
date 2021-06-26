import React from 'react'
import './RenderWindow.css'
import { Button } from './NavBar/Button'
import Scene_1 from './Scenes/Scene_1'


function RenderWindow()
 {
    return (
        <div  className= 'render'>
            <div className= 'render-window'>
                <Scene_1/>
            </div>
            <div className= 'render-window-screen'>
            </div>
            <div className = "render-container">
                <Button buttonStyle='btn--outline' className = 'play-button'> 
                    <i className ='fas fa-mouse'></i> Scroll to continue
                </Button>

            </div>
        </div>
    )
}

export default RenderWindow
