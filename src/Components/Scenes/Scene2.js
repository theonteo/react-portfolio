/*****************************************************************************/
/*!
\file Scene_2.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/
import * as THREE from "three";

//renderer related
import CloudModel from "../../Render/CloudModel";
import Scene from "../Scenes/Scene";


import { Vector3 } from "three";

/******************************************************************************/
/*!
\brief  main 3d scene setup
*/
/******************************************************************************/
class Scene2 extends Scene
{
  //constructor
  constructor(_options)
  {
    super(_options);

    //add main room model
    this.cloud = new CloudModel({
      //texture:img,
      scene: this.scene
    });
    this.scene.background = null;
    this.startRender();
  }
  /******************************************************************************/
  /*!
  \brief  update per frame
  */
  /******************************************************************************/
  Update()
  {
    //get page position and lerp camera 
    //compensate initial intro height - 3.25
    const t = document.body.getBoundingClientRect().top + window.innerHeight * 2.25;
    const t2 = document.body.getBoundingClientRect().top + window.innerHeight * 3;

    this.pageLerp = t * 0.0045;
    this.pageLerp2 = t2 * 0.045;
    //modify camera position

    let distx = 0;
    let disty = -t2 * 0.5;
    let distz = 1000;

    //position animation
    this.newCamera.setPosition
      (this.newCamera.position.lerp(
        new THREE.Vector3(distx, disty, distz), 0.05));

    if (this.cloud.loaded)
      this.cloud.updateModel(t);
    this.newCamera.threeCamera.lookAt(new Vector3(0, 0, 0));
  }

}

export default Scene2