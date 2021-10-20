import { React } from 'react'
import './LandingTitle.css'
import './font.css'
import { Button } from '../Interaction/Button'
function LandingTitle()
{
    return (
        <div>
            <div className='Title-heading'>
                Theon Teo
            </div>

            <div className='Title-subtext'>
                Software Engineer
            </div>
            <div className='Title-subtext'>
                <Button buttonStyle='btn--outline'> Contact</Button>
            </div>
        </div>
    )
}

export default LandingTitle
