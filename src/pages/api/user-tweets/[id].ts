import { twitterClient } from "lib/twitter/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { TwitterResponse, usersIdTweets } from "twitter-api-sdk/dist/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TwitterResponse<usersIdTweets>>
) {
  if (req.query.id === undefined) {
    return res.status(404);
  }
  const userId = typeof req.query.id === "string" ? req.query.id : req.query.id![0];
  const twitterResponse = await twitterClient.tweets.usersIdTweets(userId);
  const errors = twitterResponse.errors;
  if (errors !== undefined) {
    return res.status(errors![0].status!).json({ errors: errors });
  }
  res.status(200).json(twitterResponse);
}
