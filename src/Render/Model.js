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

import {MTLLoader, OBJLoader } from "three-obj-mtl-loader";

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
        /*
       // Model/material loading!
	var mtlLoader = new MTLLoader();
	mtlLoader.load("./assets/Models/room.mtl", materials=>{
		
		materials.preload();
        
		var objLoader = new OBJLoader();
		objLoader.setMaterials(materials);
		
		objLoader.load("./assets/Models/room.obj", mesh=>{
		
			mesh.traverse(function(node){
				if( node instanceof THREE.Mesh ){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
		
			this.scene.add(mesh);
			mesh.position.set(0, 3, 0);
			mesh.rotation.y = -Math.PI/4;
		});
		
	});
    */
   
    var mtlLoader = new MTLLoader();

    
    mtlLoader.load('/room.mtl', materials => {
      materials.preload();
      console.log("Material loaded");

      //Load Object Now and Set Material
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        '/room.obj',
        object => {
          console.log(" load!");
          this.freedomMesh = object;
          this.freedomMesh.position.setY(3); //or  this
          this.freedomMesh.scale.set(2, 2, 2);
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