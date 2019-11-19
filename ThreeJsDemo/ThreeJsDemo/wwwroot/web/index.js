//==Scene==
var renderer;
var scene;
var camera;
//------------------

var mainCube;
var pressedKeys = [];
var speed = .1;

function Startup() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500); //FOV, ApectRatio, Near Clipping Plane, Far Clipping Plane

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight); //Width and Height of the window
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    mainCube = new THREE.Mesh(geometry, material);
    mainCube.position.set(0, -3, 0)
    scene.add(mainCube);

    camera.position.set(0, 0, 10);
}

//Update loop
function Update() {
    if (pressedKeys["A".charCodeAt(0)] && pressedKeys["A".charCodeAt(0)] === true) {
        mainCube.position.x -= 1 * speed;
    }
    if (pressedKeys["D".charCodeAt(0)] && pressedKeys["D".charCodeAt(0)] === true) {
        mainCube.position.x += 1 * speed;
    }
}

function animate() {
    requestAnimationFrame(animate);
    Update();
    renderer.render(scene, camera);
}
Startup();
animate();

window.addEventListener("keydown", function (e) {
    pressedKeys[e.keyCode] = true;
},
    false);

window.addEventListener('keyup', function (e) {
    pressedKeys[e.keyCode] = false;
},
    false);













////INPUTS

////Keyboard Input
//// movement - please calibrate these values
//var xSpeed = 0.1;
//var ySpeed = 0.1;

//document.addEventListener("keydown", onDocumentKeyDown, false);
//function onDocumentKeyDown(event) {
//    var keyCode = event.which;
//    if (keyCode == 87) {
//        cube.position.y += ySpeed;
//    } else if (keyCode == 83) {
//        cube.position.y -= ySpeed;
//    } else if (keyCode == 65) {
//        cube.position.x -= xSpeed;
//    } else if (keyCode == 68) {
//        cube.position.x += xSpeed;
//    } else if (keyCode == 32) {
//        cube.position.set(0, 0, 0);
//    }
//};