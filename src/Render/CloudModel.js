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
import { Vector3 } from "three";
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
        this.loaded = false;
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
    updateModel()
    {
        var positions = this.geometry.attributes.position.array;
        var colors =  this.geometry.attributes.color.array;

        for(var i = 0;i<this.pointCount;++i)
        {
            positions[i*3] = positions[i*3]+0.1;
            //positions[i*3+1] = positions[i].y;
            //positions[i*3+2] = points[i].z;
           // colors[i*3] = cols[i].x;
            //colors[i*3+1] = cols[i].y;
           // colors[i*3+2] = cols[i].z;
            
        }


        this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }
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
        var colors = ["#468966","#FFF0A5", "#FFB03B","#B64926", "#8E2800"];

        function Particle(x,y){
            this.x =  Math.random()*900;
            this.y =  Math.random()*900;
            this.dest = {
              x : x,
              y: y
            };
            this.r =  Math.random()*5 + 2;
            this.vx = (Math.random()-0.5)*20;
            this.vy = (Math.random()-0.5)*20;
            this.accX = 0;
            this.accY = 0;
            this.friction = Math.random()*0.05 + 0.94;
          
            this.color = colors[Math.floor(Math.random()*6)];
          }
        Particle.prototype.render = function() {

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
        var tmaterial = new THREE.PointsMaterial({
            size: 7.5,
            opacity: 1,
            vertexColors: THREE.VertexColors
          });
        this.texture = texture;

        console.log(texture.image.width);
        const points = [];
        const cols = [];

        var imagedata = getImageData( this.texture.image ); //<-- error occurs here

        for (var y = 0, y2 =this.texture.image.height; y < y2; y += 20) {
            for (var x = 0, x2 = this.texture.image.width; x < x2; x += 20) {

                var col = getPixel(imagedata, x , y );
                //console.log(( getPixel(imagedata,x * 4 , y * 4 ).r));
                //if (col.b >200) {
    
                    var vertex = new THREE.Vector3();
                    vertex.x = (x - this.texture.image.width/2)/4 ;
                    vertex.y = (-y +this.texture.image.height /2)/4;
                    //vertex.z = -Math.random()*500;
                    vertex.z = 0;
                    //vertex.speed = Math.random() / speed + 0.015;
    
                   // this.scene.add(new THREE.Mesh( vertex, material));
                    cols.push(new Vector3(col.r/255,col.g/255,col.b/255));
                    points.push( vertex);
                //}
            }
        }

        var geometry = new THREE.BufferGeometry();
        var positions = new Float32Array( points.length * 3); // 3 vertices per point
        var colors = new Float32Array(points.length * 3); // 3 colors per point
        for(var i = 0;i<points.length;++i)
        {
           positions[i*3] =points[i].x;
           positions[i*3+1] =points[i].y;
           positions[i*3+2] =points[i].z;
            colors[i*3] = cols[i].x;
            colors[i*3+1] = cols[i].y;
            colors[i*3+2] = cols[i].z;
            
        }
      
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        this.pointCount = points.length;
        this.geometry = geometry;
        this.particles = new THREE.Points(geometry, tmaterial);
        console.log("cloud loaded");
        this.scene.add(this.particles);
        this.loaded = true;
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