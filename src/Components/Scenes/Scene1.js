/*****************************************************************************/
/*!
\file Scene_1.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/
import * as THREE from "three";
import { MathUtils, Vector2, Vector3 } from "three";

//renderer related
import Model from "../../Render/Model";
import Scene from "../Scenes/Scene";


/******************************************************************************/
/*!
\brief  main 3d scene setup
*/
/******************************************************************************/
class Scene1 extends Scene
{
  //constructor
  constructor(_options)
  {
    super(_options);

    //mouse data
    this.mouse = new Vector2(0, 0);
    this.mouseNormalized = new Vector2(0, 0);
    this.lerpedMouse = new Vector2(0, 0);

    //time
    this.lastUpdate = Date.now();

    //camera vectors
    this.camDirection = new Vector3(0, 0, 0);
    this.camUp = new Vector3(0, 0, 0);
    this.camSide = new Vector3(0, 0, 0);
    this.camPos = new Vector3(0, 0, 0);
    this.camLookAt = new Vector3(0, 0, 0);

    this.sendPoint = new Vector3(0, 0, 0);
    this.tempPoint = new Vector3(0, 0, 0);

    this.sendPointLookAt = new Vector3(0, 0, 0);
    this.tempPointLookAt = new Vector3(0, 0, 0);

    //add main room model
    new Model({
      modelLink: '/room.obj',
      matLink: '/room.mtl',
      position: new THREE.Vector3(0, 3, 0),
      scale: new THREE.Vector3(2, 2, 2),
      scene: this.scene
    });

    //add event listeners
    this.loadListener();
    this.startRender();
    this.generateCamCurve();

    this.currPointLerped = new Vector3(0, 0, 0);
    this.currPointLookAtLerped = new Vector3(0, 0, 0);
    this.currPointLerped.set
      (0.75, 2.879, -0.125);
    this.currPointLookAtLerped.set
      (-2.717, 2.819, -0.256);
  }

  generateCamCurve()
  {
    //position points
    var posPoints = [];

    posPoints.push(new THREE.Vector3(0.75, 2.879, -0.25));
    posPoints.push(new THREE.Vector3(2.524, 2.819, -0.256));
    posPoints.push(new THREE.Vector3(4.000, 3.771, -2.23));
    this.spline = new THREE.CatmullRomCurve3(posPoints);
    this.points = this.spline.getPoints(200);

    //rotation points
    var lookAtPoints = [];
    lookAtPoints.push(new THREE.Vector3(-2.717, 2.819, -0.256));
    lookAtPoints.push(new THREE.Vector3(0.817, 2.819, -0.256));
    lookAtPoints.push(new THREE.Vector3(0.917, 2.819, -0.256));

    this.lookAtSpline = new THREE.CatmullRomCurve3(lookAtPoints);
    this.lookAtPoints = this.lookAtSpline.getPoints(200);
  }
  /******************************************************************************/
  /*!
  \brief  update per frame
  */
  /******************************************************************************/
  loadListener()
  {
    window.addEventListener("mousemove",
      (e) =>
      {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      });
  }

  Update()
  {
    //update delta time
    var now = Date.now();
    this.dt = now - this.lastUpdate;
    this.lastUpdate = now;

    this.mouseNormalized.x = this.mouse.x / window.innerWidth - 0.5;
    this.mouseNormalized.y = this.mouse.y / window.innerHeight - 0.5;

    this.lerpedMouse.x = MathUtils.lerp(this.lerpedMouse.x, this.mouseNormalized.x, 0.1 * 1 / this.dt);
    this.lerpedMouse.y = MathUtils.lerp(this.lerpedMouse.y, this.mouseNormalized.y, 0.1 * 1 / this.dt);

    //get page position and lerp camera 
    const t = document.body.getBoundingClientRect().top;

    this.pageLerp = t * 0.001;
    this.pageLerp2 = t * 0.1;
    this.pageLerp3 = t;

    //modify camera position
    this.newCamera.threeCamera.getWorldDirection(this.camDirection);

    this.camSide.crossVectors(this.camDirection, this.newCamera.threeCamera.up);
    this.camUp.crossVectors(this.camSide, this.newCamera.threeCamera.up);

    this.camPos.set(0.0, 0.0, 0.0);
    this.camLookAt.set(0.0, 0, 0);

    this.camDirection.multiplyScalar(MathUtils.clamp(-this.pageLerp, 0.05, 1) * -this.lerpedMouse.y * (2.0 - this.pageLerp));
    this.camSide.multiplyScalar(MathUtils.clamp(-this.pageLerp, 0.05, 1) * this.lerpedMouse.x * (2.0 - this.pageLerp));
    this.camUp.multiplyScalar(MathUtils.clamp(-this.pageLerp, 0.05, 1) * -this.lerpedMouse.y * (3.0 - this.pageLerp));

    var index = MathUtils.clamp(-this.pageLerp2, 0.0, 200.0);

    let currPoint = this.points[parseInt(index, 10)];
    let currPointLookAt = this.lookAtPoints[parseInt(index, 10)];

    this.tempPoint = currPoint;
    this.tempPointLookAt = currPointLookAt;
    this.sendPoint.copy(this.camPos);
    this.sendPoint.add(currPoint);
    this.sendPoint.add(this.camDirection);
    this.sendPoint.add(this.camSide);
    this.sendPoint.add(this.camUp);

    this.sendPointLookAt.copy(this.camLookAt);
    this.sendPointLookAt.add(currPointLookAt);

    this.currPointLerped.lerp(this.sendPoint, 0.05);
    this.currPointLookAtLerped.lerp(this.sendPointLookAt, 0.05);

    this.newCamera.setPosition
      (this.currPointLerped);

    this.newCamera.threeCamera.lookAt(this.currPointLookAtLerped);
  }
}

export default Scene1