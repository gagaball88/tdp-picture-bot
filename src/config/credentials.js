import dotenv from 'dotenv';


dotenv.config({ path: './config/credentials.env' })

//exports the keys


export let twitterConfig = {
    appKey : process.env.TWITTER_API_KEY,

    appSecret : process.env.TWITTER_API_SECRET_KEY,

    accessToken : process.env.TWITTER_ACCESS_TOKEN,

    accessSecret : process.env.TWITTER_ACCESS_TOKEN_SECRET,

    //bearerToken : process.env.TWITTER_BEARER_TOKEN
};