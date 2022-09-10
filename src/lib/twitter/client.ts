import Client from "twitter-api-sdk";

export const twitterClient = new Client(process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN as string);
