/*****************************************************************************/
/*!
\file CardItem.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/
import React from 'react'
import {Link} from 'react-router-dom'
import './CardItem.css'
function CardsItem(props)
{
    return (
        <>
            <li className = 'cards__item'>
                <Link className = 'cards__item__link' to= {props.path} >
                <div className = "cards__item__color">
                    <figure className = 'cards__item__pic-wrap'>
                        <img 
                        src = {props.src}
                        className = "cards__item__img" alt=''>
                        </img>
                    </figure>      
                    </div>
                    <div className = "cards__item__info">
                        <div className = "cards__item__title">
                            {props.text}
                        </div>
                        <div class="project-line"></div>
                        <h5 className = "cards__item__information">
                            {props.information}
                        </h5>
                        <div className = "cards__item__icon__container">
                            <i class={ props.icon1 }></i>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardsItem;
