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

export let pgConfig = {
    host: process.env.PG_HOST_IP,

    port: process.env.PG_HOST_PORT,

    user: process.env.PG_USERNAME,

    password: process.env.PG_PASSWORD,

    database: process.env.PG_DATABASE,
}