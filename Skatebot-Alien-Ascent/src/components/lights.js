import { AmbientLight, DirectionalLight } from 'three';

export function createLights() {
  const ambientLight = new AmbientLight(0xffffff, 0.5);
  const directionalLight = new DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 10, 7.5);
  return { ambientLight, directionalLight };
}
