import React from 'react'
import './About.css'
import {Button} from '../NavBar/Button'


function About()
{
    const goToContact = ()=>{
        var email = "theonteo96@gmail.com";
        var mailto_link = 'mailto:' + email;
        window.open(mailto_link, 'emailWindow');
      };
    return(
    <>
        <div className = 'AboutContainer'>

            <div className = 'LeftPanel'>
                <div className = 'Title'>Building Simplicity.</div>
                <div class="line"></div>
                <div className = 'SubText'>Hi ! I am currently pursuing software engineering and development with a focus in front-end aspects.
</div>
<div className = 'SubText'> My interests are in Front-End Graphics Rendering , Technical Art and Full-stack development.
</div>
<div className = 'SubTextBold'> Want to know more?
</div>
<Button buttonStyle='btn--outline' onClick = {goToContact}> Get In Touch!</Button>

            </div>
            <div className = 'RightPanel'>
            </div>   
        </div>
    </>);
}

export default About;