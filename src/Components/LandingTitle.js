import {React} from 'react'
import './LandingTitle.css'
import './font.css'
import {Button} from '../Components/NavBar/Button'
function LandingTitle()
 {
    return (
        /*
        <div>
        <div className = 'Title-heading'>
            TITLE 
        </div>
        <div className = 'Title-heading'>
             PAGE
        </div>
        <div className = 'Title-subtext'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

        </div>
    </div>
    */

        <div className = 'Title-group'>
            <div className = 'Title-heading'>
                ../TheonTeo/
            </div>
            <div className = 'Title-colored'>
               
                 Software Engineer
            </div>
          
            <Button buttonStyle='btn--outline'> Contact</Button>
        </div>
    )
}

export default LandingTitle
