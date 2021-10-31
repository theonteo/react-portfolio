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
                <div class="project-label">Want to get in touch?</div>
                <h4 class="project-title">Feel free to reach out!</h4>
                
                <Button buttonStyle='btn--outline' onClick={goToContact}>Contact Me</Button>
            </div>
        </div>
    )
}
export default Contact;