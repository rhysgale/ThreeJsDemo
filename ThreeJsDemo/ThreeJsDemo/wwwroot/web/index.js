var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500); //FOV, ApectRatio, Near Clipping Plane, Far Clipping Plane

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); //Width and Height of the window
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.set(0, 0, 10);

var lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
var lineGeometry = new THREE.Geometry();
lineGeometry.vertices.push(new THREE.Vector3(-10, 0, 0));
lineGeometry.vertices.push(new THREE.Vector3(0, 10, 0));
lineGeometry.vertices.push(new THREE.Vector3(10, 0, 0));

var line = new THREE.Line(lineGeometry, lineMaterial);
scene.add(line);

// Create lights
var light = new THREE.PointLight(0xEEEEEE);
light.position.set(0, 0, -20);
scene.add(light);

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}
animate();


//Keyboard Input
// movement - please calibrate these values
var xSpeed = 0.1;
var ySpeed = 0.1;

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) {
        cube.position.y += ySpeed;
    } else if (keyCode == 83) {
        cube.position.y -= ySpeed;
    } else if (keyCode == 65) {
        cube.position.x -= xSpeed;
    } else if (keyCode == 68) {
        cube.position.x += xSpeed;
    } else if (keyCode == 32) {
        cube.position.set(0, 0, 0);
    }
};