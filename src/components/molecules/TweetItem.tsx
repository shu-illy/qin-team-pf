import { textToHtml } from "utils/textToHtml";
import {
  Avatar,
  Group,
  Stack,
  Text,
  TypographyStylesProvider,
  useMantineTheme,
} from "@mantine/core";
import { dateFormatted } from "lib/dayjs/ext";
import React from "react";
import { Tweet } from "types";

type Props = {
  tweet: Tweet;
};

const TweetItem: React.FC<Props> = ({ tweet }) => {
  const theme = useMantineTheme();
  const tweetYear = Number(dateFormatted(tweet.tweetedAt, "YYYY"));
  const currentYear = new Date().getFullYear();
  const tweetDate =
    tweetYear === currentYear
      ? dateFormatted(tweet.tweetedAt, "M月D日")
      : dateFormatted(tweet.tweetedAt, "YYYY年M月D日");
  return (
    <Group spacing={16} align="start" noWrap={true}>
      <Avatar src={tweet.userIcon} radius="xl" />
      <Stack spacing={4}>
        <Group spacing={8}>
          <Text size={16} weight="bold">
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
  );
};

export default TweetItem;
