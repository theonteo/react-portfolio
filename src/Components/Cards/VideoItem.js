/*****************************************************************************/
/*!
\file VideoItem.js
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
function VideoItem(props)
{
        return (
            <>
                <li className='cards__item'>
                    <div className='cards__item__link' to={props.path} >

                        <figure className='video__item__pic-wrap'>
                        <iframe title = {props.title} src={props.src} allowfullscreen="allowfullscreen" style = {{  height: '33vh'}}></iframe>
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
                    </div>
                </li>
            </>
        )
}

export default VideoItem;
