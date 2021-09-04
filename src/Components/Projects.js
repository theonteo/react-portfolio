//store project related images
import CardImg from '../images/img-2.jpg'
import CardImg2 from '../images/img-3.jpg'
import CardImg3 from '../images/img-4.jpg'
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
          <div className="cards_container">
            <div class="project-label">A collection of</div>
            <h4 class="project-title">Noteworthy Projects</h4>
            <div class="project-line"></div>
            <div className='cards__wrapper'>
              <div className='cards__items'>

                <CardItem
                  src={CardImg}
                  text='Multiplayer UDP P2P'
                  information='A multiplayer game which uses Winsock for communication between different clients.Primarily in charge of base engine and Networking setup.'
                  label='Personal'
                  path='/services'
                  icon1='fab fa-github'
                />
                <CardItem

                  text=''
                  information=''
                  label=''
                  path=''
                  icon1=''
                />
                <CardItem

                  text=''
                  information=''
                  label=''
                  path=''
                  icon1=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Projects;