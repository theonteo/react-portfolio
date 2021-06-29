import react from "react";

//store project related images
import CardImg from '../images/img-9.jpg'
import CardImg2 from '../images/img-8.jpg'
import CardItem from "./CardItem"
import './Cards.css'

function Projects()
{
    return (
    <>
        <div className = "cards_container">
            <div className = 'cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src={CardImg}
                        text='Project1'
                        label='Personal'
                        path='/services'
                         />
                          <CardItem 
                        src={CardImg}
                        text='Project1'
                        label='Personal'
                        path='/services'
                         /> 
                         </ul>

                         <ul className='cards__items'>
                        <CardItem 
                        src={CardImg}
                        text='Project1'
                        label='Personal'
                        path='/services'
                         />
                          <CardItem 
                        src={CardImg}
                        text='Project1'
                        label='Personal'
                        path='/services'
                         /> 
                         </ul>




                         
                </div>
        </div>
    </>);
}

export default Projects;