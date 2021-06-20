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
import React, { Component } from "react";
import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import OrbitControls from "three-orbitcontrols";
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
    new Camera({position: new THREE.Vector3(0,5,20),
      width : width, height : height});
           
    //Camera Controls
    const controls = new OrbitControls
    (this.newCamera.threeCamera, this.renderer.domElement);

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
    var lights = [];
    lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);

    //Simple Box with WireFrame
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

    // -----Step 2--------
    //LOAD TEXTURE and on completion apply it on SPHERE
    new THREE.TextureLoader().load(
      "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      texture => {
        //Update Texture
        this.cube.material.map = texture;
        this.cube.material.needsUpdate = true;
      },
      xhr => {
        //Download Progress
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      error => {
        //Error CallBack
        console.log("An error happened" + error);
      }
    );
    // instantiate a loader
    const loader = new OBJLoader();

    // load a resource
    loader.load(
      // resource URL
      'assets/Models/cone.obj',
      // called when resource is loaded
      object => {
        this.freedomMesh = object;
        this.freedomMesh.position.setY(3); //or  this
        this.freedomMesh.material = material;
        this.freedomMesh.scale.set(2,2, 2);
        this.scene.add(this.freedomMesh);
      },
      // called when loading is in progresses
      function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

      },
      // called when loading has errors
      function ( error ) {

        console.log( 'An error happened' );

      }
    );
    //load mesh

    /*
    var mtlLoader = new MTLLoader();
    mtlLoader.setBaseUrl("./Assets/Models");
    mtlLoader.load("cone.mtl", materials => {
      materials.preload();
      console.log("Material loaded");
      //Load Object Now and Set Material
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        "./Assets/Models/cone.obj",
        object => {
          this.freedomMesh = object;
          this.freedomMesh.position.setY(3); //or  this
          this.freedomMesh.material = material;
          this.freedomMesh.scale.set(100, 100, 100);
          this.scene.add(this.freedomMesh);
        },
        xhr => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        error => {
          console.log("An error happened" + error);
        }
      );
    });
    */
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
  animate = () => {
    // -----Step 3--------
    //Rotate Models
    if (this.cube) this.cube.rotation.y += 0.01;
    if (this.freedomMesh) this.freedomMesh.rotation.y += 0.01;

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
    this.renderer.render(this.scene, this.newCamera.threeCamera);
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
