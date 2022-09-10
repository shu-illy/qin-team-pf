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
  // return res.status(200).json([
  //   {
  //     id: "testId",
  //     userName: "リリー",
  //     userId: "lily_otk",
  //     userIcon: "https://secure.gravatar.com/avatar/a84921a533a2475592b065e840b92755.jpg",
  //     tweet: "1個目",
  //     tweetedAt: "2021/10/11",
  //   },
  // ]);
  if (req.query.id === undefined) {
    return res.status(404);
  }
  // return res.status(200).json([
  //   {
  //     id: "testId",
  //     userName: "リリー",
  //     userId: "lily_otk",
  //     userIcon: "https://secure.gravatar.com/avatar/a84921a533a2475592b065e840b92755.jpg",
  //     tweet: "2個目",
  //     tweetedAt: "2021/10/11",
  //   },
  // ]);
  const userId = typeof req.query.id === "string" ? req.query.id : req.query.id![0];
  // return res.status(200).json([
  //   {
  //     id: "testId",
  //     userName: "リリー",
  //     userId: "lily_otk",
  //     userIcon: "https://secure.gravatar.com/avatar/a84921a533a2475592b065e840b92755.jpg",
  //     tweet: "3個目",
  //     tweetedAt: "2021/10/11",
  //   },
  // ]);
  try {
    console.log(userId);
    const twitterResponse = await twitterClient.tweets.usersIdTweets(userId, {
      expansions: ["author_id"],
      "tweet.fields": ["author_id", "created_at"],
      "user.fields": ["name", "profile_image_url", "username"],
    });
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      error: {
        title: "エラーが発生しました",
        detail: "",
      },
    });
  }

  return res.status(200).json([
    {
      id: "testId",
      userName: "リリー",
      userId: "lily_otk",
      userIcon: "https://secure.gravatar.com/avatar/a84921a533a2475592b065e840b92755.jpg",
      tweet: "4個目",
      tweetedAt: "2021/10/11",
    },
  ]);
  // const errors = twitterResponse.errors;
  // return res.status(200).json([
  //   {
  //     id: "testId",
  //     userName: "リリー",
  //     userId: "lily_otk",
  //     userIcon: "https://secure.gravatar.com/avatar/a84921a533a2475592b065e840b92755.jpg",
  //     tweet: "5個目",
  //     tweetedAt: "2021/10/11",
  //   },
  // ]);
  // if (errors !== undefined) {
  //   return res.status(200).json([
  //     {
  //       id: "testId",
  //       userName: "リリー",
  //       userId: "lily_otk",
  //       userIcon: "https://secure.gravatar.com/avatar/a84921a533a2475592b065e840b92755.jpg",
  //       tweet: "エラーハンドリング",
  //       tweetedAt: "2021/10/11",
  //     },
  //   ]);
  //   return res.status(errors![0].status!).json({
  //     error: {
  //       title: errors![0].title,
  //       detail: errors![0].detail,
  //     },
  //   });
  // }
  // const data = twitterResponse.data;
  // return res.status(200).json([
  //   {
  //     id: "testId",
  //     userName: "リリー",
  //     userId: "lily_otk",
  //     userIcon: "https://secure.gravatar.com/avatar/a84921a533a2475592b065e840b92755.jpg",
  //     tweet: "6個目",
  //     tweetedAt: "2021/10/11",
  //   },
  // ]);
  // const user = twitterResponse.includes!.users![0];
  // return res.status(200).json([
  //   {
  //     id: "testId",
  //     userName: "リリー",
  //     userId: "lily_otk",
  //     userIcon: "https://secure.gravatar.com/avatar/a84921a533a2475592b065e840b92755.jpg",
  //     tweet: "7個目",
  //     tweetedAt: "2021/10/11",
  //   },
  // ]);
  // const tweets = data?.map((element) => {
  //   const tweet: Tweet = {
  //     id: element.id,
  //     userName: user.name,
  //     userId: user.username,
  //     userIcon: user.profile_image_url!,
  //     tweet: element.text,
  //     tweetedAt: element.created_at!,
  //   };
  //   return tweet;
  // });

  // res.status(200).json(tweets ?? []);
}
