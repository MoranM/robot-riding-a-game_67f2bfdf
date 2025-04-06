import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

export function createControls(camera, renderer) {
  const controls = new PointerLockControls(camera, renderer.domElement);
  return controls;
}
