import MainScene from "./mainScene.js";

const config = {
  width: 700,
  height: 500,
  type: Phaser.AUTO,
  parent: "phaser-game",
  scene: [MainScene],
};

new Phaser.Game(config);
