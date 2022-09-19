import { textToHtml } from "utils/htmlConverter";
import {
  Anchor,
  Avatar,
  Group,
  Stack,
  Text,
  TypographyStylesProvider,
  useMantineTheme,
} from "@mantine/core";
import { dateFormatted } from "lib/dayjs/ext";
import React, { FC } from "react";
import { Tweet } from "types";

type Props = {
  tweet: Tweet;
};

const TweetItem: FC<Props> = ({ tweet }) => {
  const theme = useMantineTheme();
  const tweetYear = Number(dateFormatted(tweet.tweetedAt, "YYYY"));
  const currentYear = new Date().getFullYear();
  const tweetDate =
    tweetYear === currentYear
      ? dateFormatted(tweet.tweetedAt, "M月D日")
      : dateFormatted(tweet.tweetedAt, "YYYY年M月D日");
  const link = `https://twitter.com/${tweet.userId}/status/${tweet.id}`;
  return (
    <Anchor href={link} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
      <Group spacing={16} align="start" noWrap={true} py={16} pr={16}>
        <Avatar src={tweet.userIcon} radius="xl" />
        <Stack spacing={4}>
          <Group spacing={8}>
            <Text size={16} weight="bold" color={theme.black}>
              {tweet.userName}
            </Text>
            <Text
              size={12}
              weight="bold"
              color={theme.colors.dark[2]}
            >{`@${tweet.userId}・${tweetDate}`}</Text>
          </Group>
          <TypographyStylesProvider>
            <div dangerouslySetInnerHTML={{ __html: textToHtml(tweet.tweet) }} />
          </TypographyStylesProvider>
        </Stack>
      </Group>
    </Anchor>
  );
};

export default TweetItem;
