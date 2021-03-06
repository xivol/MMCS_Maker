/**
 * Author: Michael Hadley, mikewesthad.com
 */

import EditorScene from "./editor-scene.js";
import PlayerScene from "./player-scene.js";
import XUI from "./x-ui/x-ui.js";
import FirebasePlugin from "./firebase/firebase-plugin.js";
import Level from "./level.js";

const config = {
  type: Phaser.AUTO,
  width: 512,
  height: 640,
  parent: "game-container",
  pixelArt: true,
  backgroundColor: "#5c94fc",

  scene: [
    EditorScene,
    PlayerScene
  ],

  input : {
    activePointers: 2
  },

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
    }, {
      key: "FirebasePlugin",
      plugin: FirebasePlugin,
      mapping: "firebase",
      data: {
        config: {
          apiKey: "AIzaSyBK7ivo3xUqeYJ-hIjB96dDwKr6dJ5daW4",
          authDomain: "sf2018-mmcs-maker.firebaseapp.com",
          databaseURL: "https://sf2018-mmcs-maker.firebaseio.com",
          projectId: "sf2018-mmcs-maker",
          storageBucket: "sf2018-mmcs-maker.appspot.com",
          messagingSenderId: "556943315920"
        },
        collections: [{
          key: "level",
          remoteId: "level-data",
          proto: Level
        },
        {
          key: "score",
          remoteId: "user-score"
        }],
      }
    }],
    scene: [{
      key: "XUI",
      plugin: XUI,
      mapping: "xui",
    }]
  }
};

localStorage.clear();
let game = new Phaser.Game(config);
