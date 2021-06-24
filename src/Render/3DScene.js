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
import OrbitControls from "three-orbitcontrols";

//renderer related
import Model from "./Model";
import Texture from "./Texture";

import './3DScene.css'
import Camera from "./Camera";

/******************************************************************************/
/*!
\brief  main 3d scene setup
*/
/******************************************************************************/
class ThreeScene extends Component
 {
/******************************************************************************/
/*!
\brief  create new camera
*/
/******************************************************************************/
  setCamera(width,height)
  {
    //add Camera
    this.newCamera = 
    new Camera({
      position: new THREE.Vector3(6,9,-9),
      rotation: new THREE.Quaternion(0.3,2.7,-0.2),
      width : width, height : height});
           
    //Camera Controls
    const controls = new OrbitControls
    (this.newCamera.threeCamera,
       this.renderer.domElement);
  }
/******************************************************************************/
/*!
\brief  component mounted - three.js
*/
/******************************************************************************/
  componentDidMount()
   {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.scene = new THREE.Scene();

    //Add Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#263238");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    this.camY = 0;
    //add Camera
    this.setCamera(width,height);

    //LIGHTS
    var lights = [];
    const ambient = new THREE.AmbientLight(0xf5e0ff , 1.2  , 0);
    
   
    window.addEventListener('mousemove', event => {
      this.camY+=event.deltaY;
  });
    /*
    lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
    */
    this.scene.add(ambient);
    //Simple Box with WireFrame
    this.addModels();
 
    this.renderScene();
    //start animation
    this.start();
  }
  onMouseWheel( event ) {
    if(event.deltaY > 0)
    this.camY +=1000;

  }
/******************************************************************************/
/*!
\brief  add models
*/
/******************************************************************************/
  addModels() {
    // -----Step 1--------
    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const material = new THREE.MeshBasicMaterial({
      color: "#0F0"
    });
    
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    //cone test model
    this.model = new Model({
      link:'assets/Models/room.obj',
      position: new THREE.Vector3(0,3,0),
      scale: new THREE.Vector3(2,2,2),
      scene : this.scene});

   
  }
/******************************************************************************/
/*!
\brief  component unmounted - three.js
*/
/******************************************************************************/
  componentWillUnmount()
  {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () =>
   {
     
    if (!this.frameId) 
      this.frameId = requestAnimationFrame(this.animate);
    
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  
  checkLoad()
  {
   
  }

  animate = () => {
    
    // -----Step 3--------
    //Rotate Models
    if (this.cube) this.cube.rotation.y += 0.01;
    if (this.freedomMesh) this.freedomMesh.rotation.y += 0.01;
    //this.newCamera.setPosition(new THREE.Vector3(6,9+this.camY*10,-9));
  //this.newCamera.setRotation(new THREE.Quaternion(0.3+this.camY,2.7,-0.2));
  //this.newCamera.threeCamera.rotation.y += 0.01;
  //this.newCamera.threeCamera.rotation.y = 2.7+this.camY;
  this.checkLoad();
    this.renderScene();
   
    this.frameId = window.requestAnimationFrame(this.animate);
  };
/******************************************************************************/
/*!
\brief render final scene
*/
/******************************************************************************/
  renderScene = () => {

    if (this.renderer) 
      this.renderer.render
      (this.scene, this.newCamera.threeCamera);
  };


/******************************************************************************/
/*!
\brief  return - composite html
*/
/******************************************************************************/
  render() {
    return (
      <div className = 'render-window'
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default ThreeScene;
