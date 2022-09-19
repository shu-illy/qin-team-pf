import Client from "twitter-api-sdk";
import { Tweet } from "types";

export const twitterClient = new Client(process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN as string);

type TwitterResponseError = {
  detail?: string | undefined;
  status?: number | undefined;
  title: string;
  type: string;
};

type TwitterRespones = {
  data?: Tweet[];
  errors?: TwitterResponseError[];
};

export const fetchUserTweets = async (userId: string): Promise<TwitterRespones> => {
  const twitterResponse = await twitterClient.tweets.usersIdTweets(userId, {
    expansions: ["author_id"],
    "tweet.fields": ["author_id", "created_at"],
    "user.fields": ["name", "profile_image_url", "username"],
  });
  const errors = twitterResponse.errors;
  if (errors !== undefined) {
    return { errors };
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
  return { data: tweets ?? [] };
};
