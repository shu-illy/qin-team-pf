import { fetchUserTweets, twitterClient } from "lib/twitter/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Tweet } from "types";

type Error = {
  title: string;
  detail: string | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tweet[] | { error?: Error }>
) {
  if (req.query.id === undefined) {
    return res.status(404);
  }
  const userId = typeof req.query.id === "string" ? req.query.id : req.query.id![0];

  const twitterResponse = await fetchUserTweets(userId);
  if (twitterResponse.errors !== undefined) {
    return res.status(twitterResponse.errors![0].status!).json({
      error: {
        title: twitterResponse.errors![0].title,
        detail: twitterResponse.errors![0].detail,
      },
    });
  }

  res.status(200).json(twitterResponse.data ?? []);
}
