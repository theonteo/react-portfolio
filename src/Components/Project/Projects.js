/*****************************************************************************/
/*!
\file Projects.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

//store project related images
import CardImg from '../../Images/img-waves.jpg'
import CardNetworking from '../../Images/img-networking.jpg'
import CardExterior from '../../Images/img-exterior.jpg'
import CardItem from "../Cards/CardItem"

import ProjectCard from "./ProjectCard";

function Projects()
{
  return (
    <>
      <div class="project-bg">
        <ProjectCard>
        </ProjectCard>
        <div class="project-container">
          <div class="project-label">A collection of</div>
          <h4 class="project-title">Noteworthy Projects</h4>
          <div class="project-line"></div>
          <div className='cards__wrapper'>
            <div className='cards__items'>
              <CardItem
                src={CardNetworking}
                text='Winsock Networking'
                information='A multiplayer game which uses Winsock for communication between different clients.'
                label='Personal'
                path='/'
                icon1=''
              />
              <CardItem
                src={CardExterior}
                text='Virtual Showroom Website'
                information='Interactive showroom with panning camera.'
                label=''
                path='https://inspiring-mcnulty-668b0a.netlify.app/'
                icon1=''
                externalLink={true}
              />
              <CardItem
                src={CardImg}
                text='Interactive Image Point Clouds '
                information='Rendering of an image in an interactive point cloud.'
                label=''
                path='https://serene-hermann-c2f53e.netlify.app/'
                icon1=''
                externalLink={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Projects;