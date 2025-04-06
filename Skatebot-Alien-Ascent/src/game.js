import { createCamera } from './components/camera';
import { createRenderer } from './components/renderer';
import { createControls } from './components/controls';
import { createLights } from './components/lights';
import { Player } from './entities/player';
import { mainMenu } from './scenes/mainMenu';

class Game {
  constructor() {
    this.camera = createCamera();
    this.renderer = createRenderer();
    this.controls = createControls(this.camera, this.renderer);
    this.lights = createLights();
    this.player = new Player();
    mainMenu();
  }
  start() {
    this.renderer.setAnimationLoop(() => {
      this.update();
      this.render();
    });
  }
  update() {
    this.player.update();
  }
  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

export default Game;
