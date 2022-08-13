import { Center, Space, Stack } from "@mantine/core";
import SectionBottomButton from "components/atoms/SectionBottomButton";
import { SectionTitle } from "components/atoms/SectionTitle";
import TweetItem from "components/molecules/TweetItem";
import React from "react";
import { Tweet } from "types";

type Props = {
  tweets: Tweet[];
};

const Tweets: React.FC<Props> = ({ tweets }) => {
  const items = tweets.slice(0, 3);
  return (
    <Stack spacing={0}>
      <SectionTitle>Twitter</SectionTitle>
      <Stack spacing={56}>
        {items.map((tweet) => (
          <TweetItem key={tweet.id} tweet={tweet} />
        ))}
      </Stack>
      <Space h={40} />
      <Center mt={8}>
        <SectionBottomButton label="View on Twitter" />
      </Center>
    </Stack>
  );
};

export default Tweets;
