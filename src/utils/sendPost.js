import { twitterConfig } from "../config/credentials.js";
import logger from "./logger.js";
import fs from 'fs'
import {TwitterApi} from "twitter-api-v2";
//import { Client, Intents } from "discord.js";

const twitterClient = new TwitterApi(twitterConfig);

export async function sendTweet(message, imagePath) {
    const mediaId = await Promise.all([

        twitterClient.v1.uploadMedia(imagePath),

    ]);

    await twitterClient.v1.tweet(message, { media_ids: mediaId });
    logger("Tweet sent successfully: " + message + " " + imagePath);

}