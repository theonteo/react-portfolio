/*****************************************************************************/
/*!
\file Footer.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/
import React from 'react'
import { Button } from "../Interaction/Button"
import './Footer.css'
import { Link } from 'react-router-dom'


function Footer()
{

  const goToContact = () =>
  {
    var email = "theonteo96@gmail.com";
    var mailto_link = 'mailto:' + email;
    window.open(mailto_link, 'emailWindow');
  };
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Wanna get in touch?
        </p>

        <Button buttonStyle='btn--outline' onClick={goToContact}>Contact Me</Button>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Theon
            </Link>
          </div>
          <small class='website-rights'>Theon © 2021</small>
          <div class='social-icons'>
            <a
              href={'https://www.linkedin.com/in/theon-teo-80a906101/'}
              class='social-icon-link twitter'
              to='/'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer
