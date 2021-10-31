/*****************************************************************************/
/*!
\file Contact.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import '../Project/ProjectCard.css'
import '.././font.css'
import { Button } from '../Interaction/Button';

function Contact()
{
    const goToContact = () =>
    {
        var email = "theonteo96@gmail.com";
        var mailto_link = 'mailto:' + email;
        window.open(mailto_link, 'emailWindow');
    };

    return (
        <div class="project-pagespace">
            <div class="project-container">
                <div class="project-label">../ 06. Want to get in touch? /</div>
                <h4 class="project-title">Feel free to reach out!</h4>
                <div className='project-button-container'>
                    <div className='project-button'>
                        <Button buttonStyle='btn--outline' onClick={goToContact}><i class="far fa-envelope"></i> Contact Me</Button>
                    </div>
                    <div className='project-button'>
                        <Button buttonStyle='btn--outline' externalLink={true} path = {'https://www.linkedin.com/in/theon-teo-80a906101/'}><i class="fas fa-external-link-alt"></i> Connect with me in LinkedIn</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;