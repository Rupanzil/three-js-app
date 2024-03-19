import WebGL from 'three/addons/capabilities/WebGL.js'
import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500)

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth , window.innerHeight )
document.body.appendChild( renderer.domElement)

const geometry = new THREE.BoxGeometry( 1, 1, 1)
const material = new THREE.MeshBasicMaterial( { color: 0xffffff })
const cube = new THREE.Mesh( geometry, material)
scene.add(cube)

// create a blue material for line
const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } )

// create an array to store the vertices of the lines
const points = [];
points.push(new THREE.Vector3( 2, 0, -2))
points.push(new THREE.Vector3( 0, 2, -2))
points.push(new THREE.Vector3( -2, 0, -2))

const lineGeometry = new THREE.BufferGeometry().setFromPoints( points )

const line = new THREE.Line( lineGeometry, lineMaterial )

scene.add(line)

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    line.rotation.z += 0.01

    renderer.render( scene, camera )
}

if ( WebGL.isWebGLAvailable()) {
    animate();
} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning)
}

