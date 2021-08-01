/*****************************************************************************/
/*!
\file LoadingManager.js
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
function LoadingManager()
 {
    THREE.DefaultLoadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {

            console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
        
        };
        THREE.DefaultLoadingManager.onLoad = function ( ) {
        
            console.log( 'Loading Complete!');
        
        };
        
        
        THREE.DefaultLoadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
        
            console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
        
        };
        
        THREE.DefaultLoadingManager.onError = function ( url ) {
        
            console.log( 'There was an error loading ' + url );
        
        };
        return ( 
        <>
        <div>
            
        </div>
        </>);
}
export default LoadingManager;