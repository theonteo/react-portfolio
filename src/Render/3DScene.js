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
import './3DScene.css'
import Camera from "./Camera";

/******************************************************************************/
/*!
\brief  main 3d scene setup
*/
/******************************************************************************/
class ThreeScene extends Component
{

  constructor(_options) {
    super(_options);
    this.camY = 0;
  }
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
  // new OrbitControls
  //  (this.newCamera.threeCamera,
    //   this.renderer.domElement);
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
    //add Camera
    this.setCamera(width,height);

    //LIGHTS
    //var lights = [];
    const ambient = new THREE.AmbientLight(0xf5e0ff , 1.2  , 0);
    
   
    window.addEventListener('mousemove', event => {
      //this.camY+=event.deltaY;
  });


    
    
    //document.body.onscroll = moveCam;

    this.scene.add(ambient);

    this.addModels();
    this.renderScene();

    //start animation
    this.start();
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
  Update()
  {
    if (this.cube) this.cube.rotation.y += 0.01;
    if (this.freedomMesh) this.freedomMesh.rotation.y += 0.01;
   
    window.addEventListener('scroll',()=>{
    // const t = document.body.getBoundingClientRect().top;
      this.camY = t * 0.0045;
    });
    const t = document.body.getBoundingClientRect().top;
      this.camY = t * 0.0045;
    let dist = 9.0 + this.camY;

    this.newCamera.setRotation(this.newCamera.rotation.slerp
      (new THREE.Quaternion(0.3+this.camY,2.7,-0.2)));
    this.newCamera.setPosition
    (this.newCamera.position.lerp(new THREE.Vector3(6,dist,-9),0.05));
  }

  animate = () => {
    this.Update();
    // -----Step 3--------
    //Rotate Models
  

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
