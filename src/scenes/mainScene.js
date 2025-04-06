import { Scene, AmbientLight } from 'three';
import { createCamera } from '../components/camera.js';
import { createRenderer } from '../components/renderer.js';
import { createControls } from '../components/controls.js';
import { createPlayer } from '../entities/player.js';

export function initScene() {
  const scene = new Scene();
  const camera = createCamera();
  const renderer = createRenderer();
  const controls = createControls(camera, renderer);
  const player = createPlayer();
  scene.add(player);
  const light = new AmbientLight(0x404040); // soft white light
  scene.add(light);

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}