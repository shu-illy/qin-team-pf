import { Center, ScrollArea, Space, Stack } from "@mantine/core";
import SectionBottomButton from "components/atoms/SectionBottomButton";
import { SectionTitle } from "components/atoms/SectionTitle";
import TweetItem from "components/molecules/TweetItem";
import { useMediaQuery } from "lib/mantine";
import React, { FC } from "react";
import { Tweet } from "types";

type Props = {
  tweets: Tweet[];
};

const Tweets: FC<Props> = ({ tweets }) => {
  const isDesktop = useMediaQuery("sm");
  return (
    <Stack spacing={0}>
      <SectionTitle>Twitter</SectionTitle>
      <ScrollArea style={{ height: isDesktop ? 880 : 400 }}>
        <Stack spacing={24}>
          {tweets.map((tweet) => (
            <TweetItem key={tweet.id} tweet={tweet} />
          ))}
        </Stack>
      </ScrollArea>

      <Space h={24} />
      <Center mt={8}>
        <SectionBottomButton label="View on Twitter" />
      </Center>
    </Stack>
  );
};

export default Tweets;
