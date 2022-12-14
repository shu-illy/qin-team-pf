import { Anchor, Center, Loader, ScrollArea, Space, Stack } from "@mantine/core";
import axios from "axios";
import SectionBottomButton from "components/atoms/SectionBottomButton";
import { SectionTitle } from "components/atoms/SectionTitle";
import TweetItem from "components/molecules/TweetItem";
import { useMediaQuery } from "lib/mantine";
import React, { FC } from "react";
import useSWR from "swr";
import { Tweet } from "types";

const twitterFetcher = async (key: string): Promise<Tweet[]> => {
  const myTwitterUserId = process.env.MY_TWITTER_USER_ID as string;
  const url = `/api/user-tweets/${myTwitterUserId}`;
  const res = await axios.get(url);
  return res.data;
};

type Props = {
  scrollHeight: number;
};

const Tweets: FC<Props> = ({ scrollHeight }) => {
  const { data, error } = useSWR("tweets", twitterFetcher, {});
  if (error) return <div>Failed to get data</div>;
  if (!data)
    return (
      <Center>
        <Loader />
      </Center>
    );

  const accountUrl = `https://twitter.com/${data[0].userId}`;
  return (
    <Stack spacing={0}>
      <SectionTitle>Twitter</SectionTitle>
      <ScrollArea style={{ height: scrollHeight }}>
        <Stack spacing={24}>
          {data.map((tweet) => (
            <TweetItem key={tweet.id} tweet={tweet} />
          ))}
        </Stack>
      </ScrollArea>

      <Space h={24} />
      <Anchor href={accountUrl} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
        <Center mt={8}>
          <SectionBottomButton label="View on Twitter" />
        </Center>
      </Anchor>
    </Stack>
  );
};

export default Tweets;
