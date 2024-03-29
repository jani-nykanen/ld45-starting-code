import { Core } from "./engine/core.js";
import { Game } from "./game.js";

//
// Main file
// (c) 2019 Jani Nykänen
//


window.onload = () => {

    let c = new Core({
        canvasWidth: 256,
        canvasHeight: 192,
        frameRate: 60,
    });

    // Add scenes
    c.addScene(new Game(), "game", true);

    // Set assets loading
    c.assets.addBitmaps(
        {name: "font",   src: "assets/bitmaps/font.png"},
    );

    // Configure keys
    c.configActions(
        {name: "left", key: 37},
        {name: "up", key: 38},
        {name: "right", key: 39},
        {name: "down", key: 40},

        {name: "fire1", key: 90},
        {name: "fire2", key: 88},

        {name: "start", key: 13},
        {name: "back", key: 27},
    )

    c.run();
}
