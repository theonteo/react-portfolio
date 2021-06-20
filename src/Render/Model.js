/*****************************************************************************/
/*!
\file Model.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import * as THREE from "three";
import { Object3D } from "three";
import { OBJLoader } from "three-obj-mtl-loader";

/******************************************************************************/
/*!
\brief  Store/load model data
*/
/******************************************************************************/
export default class Model
{
/******************************************************************************/
/*!
\brief  constructor
*/
/******************************************************************************/
    constructor(_options)
    {
        //set variables
        this.link = _options.link;
        this.material = _options.material;
        this.scene = _options.scene;


        this.loadModel();
    }
/******************************************************************************/
/*!
\brief  load model 
*/
/******************************************************************************/
    loadModel()
    {
        const loader = new OBJLoader();
        
        //load mesh by obj loader
        loader.load(
            this.link,

        object => {
            this.mesh = object;
            this.mesh.position.setY(3); //or  this
            this.mesh.material = this.material;
            this.mesh.scale.set(2,2, 2);
            this.scene.add(this.mesh);
            //this.container = new Object3D();
           // this.container.add(this.mesh);
        },
        function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
          },
          // called when loading has errors
          function ( error )
           {
            console.log( 'An error happened' );
          }
        );

    }
/******************************************************************************/
/*!
\brief  set model material
*/
/******************************************************************************/
    setMaterial(material)
    {
        this.mesh.material = material;
    }
/******************************************************************************/
/*!
\brief  set model position
*/
/******************************************************************************/
    setPosition(position)
    {
        this.mesh.position.set(position);
    }
/******************************************************************************/
/*!
\brief  set model scale
*/
/******************************************************************************/
    setScale(scale)
    {
        this.mesh.scale.set(scale);
    }
}