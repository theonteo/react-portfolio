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
import { Link } from 'react-router-dom'
import './CardItem.css'
import { Button } from '../Interaction/Button'
function CardsItem(props)
{
    if (!props.externalLink)
        return (
            <>
                <li className='cards__item'>
                    <Link className='cards__item__link' to={props.path} >

                        <figure className='cards__item__pic-wrap'>
                            <img
                                src={props.src}
                                className="cards__item__img" alt=''>
                            </img>
                        </figure>

                        <div className="cards__item__info">
                            <div className="cards__item__title">
                                {props.text}
                            </div>
                            <h5 className="cards__item__information">
                                {props.information}
                            </h5>
                            <div className="cards__item__icon__container">
                                <i class={props.icon1}></i>
                            </div>
                        </div>
                        <div className="cards__item__button">
                            <Button buttonStyle='btn--outline' externalLink={props.externalLink} path = {props.path}>{props.buttonText}</Button>
                        </div>

                    </Link>
                </li>
            </>
        )
    else
        return (
            <>
                <li className='cards__item'>
                    <a className='cards__item__link' href={props.path} >
                        <figure className='cards__item__pic-wrap'>
                            <img
                                src={props.src}
                                className="cards__item__img" alt=''>
                            </img>
                        </figure>

                        <div className="cards__item__info">
                            <div className="cards__item__title">
                                {props.text}
                            </div>
                            <h5 className="cards__item__information">
                                {props.information}
                            </h5>
                            <div className="cards__item__icon__container">
                                <i class={props.icon1}></i>
                            </div>
                        </div>
                        <div className="cards__item__button">
                            <Button buttonStyle='btn--outline' externalLink={props.externalLink}  path = {props.path} >  <i class={props.buttonIcon} /> {props.buttonText}</Button>
                        </div>

                    </a>
                </li>
            </>
        )
}

export default CardsItem;
