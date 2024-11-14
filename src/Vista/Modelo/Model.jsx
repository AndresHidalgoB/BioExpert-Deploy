import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Importar controles de órbita

function Monitor3D() {
  useEffect(() => {
    const scene = new THREE.Scene();
    
    // Cambiar el color del fondo a blanco
    scene.background = new THREE.Color(0xffffff); // Blanco

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    const container = document.getElementById('monitor-3d');
    container.innerHTML = ''; // Limpiar el contenedor para evitar duplicados
    container.appendChild(renderer.domElement);

    // Luces
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10).normalize();
    scene.add(directionalLight);

    // Cargar el modelo glTF
    const loader = new GLTFLoader();
    loader.load('assets/Beneheart_D6.glb', function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.position.set(0, 0, 0);  // Ajustar la posición según sea necesario
    });

    // Posición inicial de la cámara
    camera.position.z = 5;

    // Añadir controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // Animación
    const animate = function () {
      requestAnimationFrame(animate);
      controls.update(); // Actualizar los controles
      renderer.render(scene, camera);
    };

    animate();

    // Limpiar el evento al desmontar el componente
    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div id="monitor-3d" style={{ width: '100vw', height: '100vh' }}></div>
  );
}

export default Monitor3D;
