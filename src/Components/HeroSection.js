import React from 'react'
import '../App'
import { Button } from './NavBar/Button'
import './HeroSeciton.css'

function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video src="/videos/video-2.mp4">
                <h1>Adventure awaits</h1>
                <p>What are you waiting for</p>
                <Button 
                className='btns' 
                buttonStyle = 'btn--outline'
                buttonSize = 'btn--large'
                >
                Get started
                </Button>

                <Button 
                className = 'btns' 
                buttonStyle = 'btn--primary'
                buttonSize = 'btn--large'
                >
                Watch <i className= 'far fa-play-circle'/>
                </Button>

            </video>
        </div>
    )
}

export default HeroSection
