//store project related images
import CardImg from '../images/img-default.jpg'
import CardNetworking from '../images/img-networking.jpg'
import CardExterior from '../images/img-exterior.jpg'
import CardItem from "./CardItem"

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
                information='A multiplayer game which uses Winsock for communication between different clients.Primarily in charge of base engine and Networking setup.'
                label='Personal'
                path='/'
                icon1='fab fa-github'
              />
              <CardItem
                src={CardExterior}
                text='3D Based Website'
                information=''
                label=''
                path='/'
                icon1=''
              />
              <CardItem
                src={CardImg}
                text='More coming up...'
                information=''
                label=''
                path='/'
                icon1=''
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );

}

export default Projects;