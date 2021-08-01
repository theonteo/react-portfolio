/*****************************************************************************/
/*!
\file LoadingManager.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/
import * as THREE from 'three';
import React, { Component } from "react";
import './LoadingManager.css'
/******************************************************************************/
/*!
\brief  main 3d camera
*/
/******************************************************************************/
class LoadingManager extends Component
{

    state = {
        progressWidth:"10%",
        hideScreen:false
    }
    constructor(_options)
    {

        super(_options);
        this.setState({
            progressWidth: "30%"
        });
        //this.progressWidth ="80%";
        this.update();
    }

    update()
    {
       
        THREE.DefaultLoadingManager.onStart =
         function ( url, itemsLoaded, itemsTotal )
        {

                console.log
                ( 'Started loading file: ' + url + '.\nLoaded ' +
                itemsLoaded + ' of ' + itemsTotal + ' files.' );
            
        };
            THREE.DefaultLoadingManager.onLoad = function ( )
            {
                console.log( 'Loading Complete!');
            };
            
            THREE.DefaultLoadingManager.onProgress =
           ( url, itemsLoaded, itemsTotal )=> {

               
            this.setState({
                progressWidth: (itemsLoaded/itemsTotal*100)+"%"
            });
                console.log
                ( 'Loading file: ' + url + '.\nLoaded ' + 
                itemsLoaded + ' of ' + itemsTotal + ' files.' );
            };
            
            THREE.DefaultLoadingManager.onError = function ( url ) 
            {
            
                console.log
                ( 'There was an error loading ' + url );
            
            };
           
    }
    render() {
        var t  = this.progressWidth;

        return ( 
            <>
            <div className = 'loading-container'>
                <div className = 'loading-background'>
                    <div className = 'progress'> 
                        <div className = 'progress2'
                         style={{ width: this.state.progressWidth }} >
                        </div>
                    </div>
                </div>
            </div>
            </>);
    
      }
}
export default LoadingManager;