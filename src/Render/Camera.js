/*****************************************************************************/
/*!
\file Camera.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import * as THREE from 'three';

/******************************************************************************/
/*!
\brief  main 3d camera
*/
/******************************************************************************/
export default class Camera
{
    //constructor
    constructor(_options)
    {
      this.width =  _options.width;
      this.height = _options.height;

      //set position
      this.position = _options.position;

      //new three.js camera
      this.threeCamera = 
      new THREE.PerspectiveCamera
      (75,this.width/this.height, 0.1, 1000);
      this.setPosition(this.position);
    }
    setPosition(vec)
    {
      this.position = vec;
      this.threeCamera .position.x = this.position.x;
      this.threeCamera .position.y = this.position.y;
      this.threeCamera .position.z = this.position.z;
    }
}