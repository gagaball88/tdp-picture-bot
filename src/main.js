import logger from './utils/logger.js';
import initPost from './utils/initPost.js';
import escExit from 'esc-exit';
import player from 'play-sound';

import { createRequire } from "module";
const require = createRequire(import.meta.url);

let config = require("./config/config.json");

///Slot 1:
let  pictureSlot

function updateVariables() {

    delete require.cache[require.resolve('./config/config.json')]   // Deleting loaded module
    config = require("./config/config.json");

    pictureSlot = config.slot

    const d = new Date();
    let minute = d.getMinutes();

    if(minute === 0) {
        initPost(pictureSlot);
    }

}

///Initialization

console.log("To quit, press ESC or Ctrl-C\n\n");
logger("Bot started successfully\n");
player().play('./sounds/start.mp3');


escExit();

let uptime = 0;

updateVariables()

///Uptime message

setInterval(() => {
    uptime = uptime + 12;
    logger("Everything's working fine for " + uptime + " hours now :)");
},  12 * 60 * 60 * 1000 )

setInterval(() => {
    updateVariables()
},  60 * 1000 )