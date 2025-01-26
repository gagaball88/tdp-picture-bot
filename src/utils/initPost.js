import { sendTweet } from"./sendPost.js";
import refreshPic from "./refreshPic.js";
import player from "play-sound";
import logger from "./logger.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
let config = require("../config/config.json");

export default async function initPost(pictureSlot) {

    let picture = refreshPic(pictureSlot);

    let message = "#TDPPictures #RenewArc3 #GiveUsTheSaga #ContinueTheSaga"
    //console.log(picture);

    let debuggingEnv = config.debuggingEnv

    if (!debuggingEnv) {
        try {
            await sendTweet(message, picture);
            //logger("Message: " + message + "\n\nPicture : " + picture + "\n")
            player().play('./sounds/notify.mp3');

            //throw 'MyException';
        }
        catch(e) {
            logger('!!!WARNING!!!\n\nTweet not sent!\n\nPicture used:' + picture + '\n\nError log:')
            console.log(e);
        }
    }
    else logger("Program in debug mode. Message: " + message + " " + picture);
}
