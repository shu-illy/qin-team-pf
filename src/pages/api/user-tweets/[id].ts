import { twitterClient } from "lib/twitter/client";
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
  console.log("userId", userId);
  const twitterResponse = await twitterClient.tweets.usersIdTweets(userId, {
    expansions: ["author_id"],
    "tweet.fields": ["author_id", "created_at"],
    "user.fields": ["name", "profile_image_url", "username"],
  });
  console.log("twitterResponse", twitterResponse);
  const errors = twitterResponse.errors;
  if (errors !== undefined) {
    return res.status(errors![0].status!).json({
      error: {
        title: errors![0].title,
        detail: errors![0].detail,
      },
    });
  }
  const data = twitterResponse.data;
  const user = twitterResponse.includes!.users![0];
  const tweets = data?.map((element) => {
    const tweet: Tweet = {
      id: element.id,
      userName: user.name,
      userId: user.username,
      userIcon: user.profile_image_url!,
      tweet: element.text,
      tweetedAt: element.created_at!,
    };
    return tweet;
  });

  res.status(200).json(tweets ?? []);
}
