/*****************************************************************************/
/*!
\file ThreeScene.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/
import React, { Component } from "react";
import * as THREE from "three";

//renderer related
import Model from "../../Render/Model";
import Scene from "../../Render/Scene";


/******************************************************************************/
/*!
\brief  main 3d scene setup
*/
/******************************************************************************/
class Scene_1 extends Scene
{
    //constructor
    constructor(_options)
    {
        super(_options);
  
        //add main room model
        new Model({
            link:'assets/Models/room.obj',
            position: new THREE.Vector3(0,3,0),
            scale: new THREE.Vector3(2,2,2),
            scene : this.scene});
        
        this.startRender();
    }
}

export default Scene_1