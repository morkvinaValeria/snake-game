import Snake from "./snake.js";

class MainScene extends Phaser.Scene {
  constructor() {
    super(MainScene);
  }

  create() {
    this.snake = new Snake(this);
  }

  update(time) {
    this.snake.update(time);
  }
}

export default MainScene;
