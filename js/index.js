/**
 * Author: Michael Hadley, mikewesthad.com
 */

import PlatformerScene from "./platformer-scene.js";
import XUI from "./x-ui/x-ui.js";

const config = {
  type: Phaser.AUTO,
  width: 512,
  height: 640,
  parent: "game-container",
  pixelArt: true,
  backgroundColor: "#5c94fc",

  scene: PlatformerScene,

  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 }
    }
  },

  plugins: {
    global: [{
      key: "GameScalePlugin",
      plugin: Phaser.Plugins.GameScalePlugin,
      mapping: "gameScale",
      data: {
        debounce: false,
        debounceDelay: 50,
        maxHeight: Infinity,
        maxWidth: Infinity,
        minHeight: 0,
        minWidth: 0,
        mode: "fit",
        resizeCameras: true,
        snap: null
      }
    }],
    scene: [{
      key: "XUI",
      plugin: XUI,
      mapping: "xui",
    }]
  }
};

localStorage.removeItem("levelData");
const game = new Phaser.Game(config);
