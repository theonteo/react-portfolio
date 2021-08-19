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
import * as THREE from "three";
import img from "../images/img-8.jpg"
/******************************************************************************/
/*!
\brief  Store/load model data
*/
/******************************************************************************/
export default class CloudModel
{
/******************************************************************************/
/*!
\brief  constructor
*/
/******************************************************************************/
    constructor(_options)
    {
        //set variables
        this.texture = _options.texture;
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

        function getImageData( image ) {

            var canvas = document.createElement( 'canvas' );
            canvas.width = image.width;
            canvas.height = image.height;
        
            var context = canvas.getContext( '2d' );
            context.drawImage( image, 0, 0 );
        
            return context.getImageData( 0, 0, image.width, image.height );
        
        }
        function getPixel( imagedata, x, y ) {

            var position = ( x + imagedata.width * y ) * 4, data = imagedata.data;
            return { r: data[ position ], g: data[ position + 1 ], b: data[ position + 2 ], a: data[ position + 3 ] };
        
        }


        // instantiate a loader
const loader = new THREE.TextureLoader();
console.log(" startloadeddddddddddddddddddddddddd");
// load a resource
loader.load(
	// resource URL
	img,

	// onLoad callback
    (texture )=> {
        console.log("loadeddddddddddddddddddddddddd");
        var material = new THREE.PointsMaterial({
            size: 1,
            color: 0x024059,
            sizeAttenuation: true
        });
        this.texture = texture;

        console.log(texture.image.width);
        const points = [];

        var imagedata = getImageData( this.texture.image ); //<-- error occurs here

        for (var y = 0, y2 =this.texture.image.height; y < y2; y += 2) {
            for (var x = 0, x2 = this.texture.image.width; x < x2; x += 2) {

               
                //console.log(( getPixel(imagedata,x * 4 , y * 4 ).r));
                if ( (getPixel(imagedata,x  , y ).r) >128) {
    
                    var vertex = new THREE.Vector3();
                    vertex.x = x - this.texture.image.width / 2;
                    vertex.y = -y +this.texture.image.height / 2;
                    //vertex.z = -Math.random()*500;
                    vertex.z = 0;
                    //vertex.speed = Math.random() / speed + 0.015;
    
                    points.push( vertex);
                }
            }
        }
        var geometry = new THREE.BufferGeometry().setFromPoints( points );
        this.particles = new THREE.Points(geometry, material);
        console.log("cloud loaded");

        this.scene.add(this.particles);
	},

	// onProgress callback currently not supported
	undefined,

	// onError callback
	function ( err ) {
		console.error( 'An error happened.' );
	}
);
    }
}