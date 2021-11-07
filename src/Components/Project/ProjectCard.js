/*****************************************************************************/
/*!
\file ProjectCard.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import { React } from 'react'

import './ProjectCard.css'
import '.././font.css'
import { Button } from '../Interaction/Button'
import imgEngine from '../../Images/img-engine.jpg'
import imgPortfolio from '../../Images/img-portfolio.jpg'
import imgNetworking from '../../Images/img-networking.jpg'
function ProjectCard()
{
  //reset scroll to top
  const goToTop = () =>
  {
    document.documentElement.scrollTop = 0;
  };

  return (

    <div class="project-container">
      <div class="project-label">../ 02. A showcase of /</div>
      <h4 class="project-title">Featured Projects</h4>
      <div class="project-line"></div>
      <div class="project">
        <div class="project-content">
          <div class="project-label">Rendering | Tools | Editor</div>
          <h4 class="project-title">SIMPLE. Engine</h4>
          <div class="project-line"></div>
          <div class="project-details">
            <div class="project-details-box">
              <div class="project-details-box-content">
                <b>  Primarily built with OpenGL and C++.</b> It is a 2D/3D Proprietary Engine built to house various interactive applications. Iterated upon from 2019 to 2021.
              </div>

            </div>
            <div class="project-list-wrapper">
              <div class="project-list">
                <div class="project-item">OpenGL</div>
                <div class="project-item"> ImGui</div>
                <div class="project-item"> JsonCpp</div>
                <div class="project-item"> C++</div>
                <div class="project-item"> C#</div>
              </div>
            </div>
          </div>
          <div class="project-button">
            <Button buttonStyle='btn--outline' path='/project-simple' onClick={goToTop} ><i class="fas fa-sign-in-alt"></i> Explore...</Button>
          </div>
        </div>
        <div class="project-img">
          <img src={imgEngine} alt="" style={{ filter: 'grayscale(0%)' }} />
        </div>
      </div>
      <div class="invert">
        <div class="project">
          <div class="project-content">
            <div class="project-label">Frontend Development | UI / UX</div>
            <h4 class="project-title">Portfolio Website</h4>
            <div class="project-line"></div>
            <div class="project-details">
              <div class="project-details-box">
                <div class="project-details-box-invert">
                  <div class="project-details-box-content">
                  <div class="revert">
                    This is the  <b>first website</b>  I have built from scratch and it is designed to expand my knowledge on  <b>frontend development</b>.
                    Some of the experiments include real time rendering of <b>3D backgrounds and interactions.</b>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-list-wrapper">
                <div class="project-list">
                  <div class="project-item">React</div>
                  <div class="project-item"> Html</div>
                  <div class="project-item"> CSS</div>
                  <div class="project-item"> Javascript</div>
                </div>
                <div class="project-list">
                  <div class="project-item"> three.js</div>
                  <div class="project-item"> webGL</div>
                  <div class="project-item"> Netlify</div>
                </div>
              </div>
            </div>
            <div class="revert">
              <div class="project-button-container">
                <div class="project-button">
                  <Button buttonStyle='btn--outline' path='/project-designopening' onClick={goToTop} ><i class="fas fa-sign-in-alt"></i> Explore...</Button>
                </div>
                <div class="project-button">
                  <Button buttonStyle='btn--outline' externalLink={true} path={'https://github.com/theonteo/react-portfolio'}><i class="fab fa-github"></i> GitHub</Button>
                </div>
              </div>
            </div>
          </div>
          <div class="project-img">
            <img src={imgPortfolio} alt="" style={{ filter: 'grayscale(0%)' }} />
          </div>
        </div>
      </div>
      <div class="project">
        <div class="project-content">
          <div class="project-label">Rendering | Networking</div>
          <h4 class="project-title">Winsock UDP Networking</h4>
          <div class="project-line"></div>
          <div class="project-details">
            <div class="project-details-box">
              <div class="project-details-box-content">
              A <b>3D multiplayer game</b> which uses Winsock for communication between different clients. Inspired by Agar.io.
              </div>

            </div>
            <div class="project-list-wrapper">
              <div class="project-list">
                <div class="project-item">OpenGL</div>
                <div class="project-item"> ImGui</div>
                <div class="project-item"> C++</div>
                <div class="project-item"> Winsock</div>
              </div>
            </div>
          </div>
          <div class="project-button">
          <Button buttonStyle='btn--outline' externalLink={true} path={'https://github.com/theonteo/multiplayer-udp-winsock'}><i class="fab fa-github"></i> GitHub</Button>
          </div>
        </div>
        <div class="project-img">
          <img src={imgNetworking} alt="" style={{ filter: 'grayscale(0%)' }} />
        </div>
      </div>
    </div>

  )
}

export default ProjectCard
