import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

export function createPlayer() {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  const player = new Mesh(geometry, material);
  player.position.y = 1;
  return player;
}