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
import './Footer.css'

function Footer()
{
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          <small class='website-rights'>Designed and Built by Theon Teo © 2021</small>
          </div>
         
          <div class='social-icons'>
            <a
              href={'https://www.linkedin.com/in/theon-teo-80a906101/'}
              class='social-icon-link twitter'
              to='/'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>

            <a
              href={'https://github.com/theonteo/'}
              class='social-icon-link twitter'
              to='/'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </a>


          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer
