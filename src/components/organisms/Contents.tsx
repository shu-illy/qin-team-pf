import { SimpleGrid, Space } from "@mantine/core";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import React, { FC } from "react";
import { GithubRepository, Portfolio, Tweet } from "types";
import GithubRepositories from "components/organisms/GithubRepositories";
import Tweets from "components/organisms/Tweets";
import TopBlogs from "components/organisms/TopBlogs";
import TopPortfolios from "components/organisms/TopPortfolios";

// TODO ダミー用データ
const repositories: GithubRepository[] = Array.from(new Array(30)).map((_, i) => ({
  id: i + 1,
  title: "lightsound/nexst-tailwind",
  description: "Next.js starter template.",
  star: 117,
  fork: 18,
  languages: [
    {
      name: "TypeScript",
      value: 1500,
    },
    {
      name: "JavaScript",
      value: 1000,
    },
    {
      name: "Ruby",
      value: 1200,
    },
    {
      name: "PHP",
      value: 400,
    },
    {
      name: "Go",
      value: 100,
    },
    {
      name: "Python",
      value: 100,
    },
    {
      name: "Other",
      value: 100,
    },
  ],
}));

// TODO ダミー用データ
const tweets: Tweet[] = Array.from(new Array(30)).map((_, i) => ({
  id: i + 1,
  userName: "リリー",
  userId: "lily_otk",
  userIcon: "https://secure.gravatar.com/avatar/a84921a533a2475592b065e840b92755.jpg",
  tweet:
    "📣 新サービス「Noway Form」をリリースしました！\n\nNoway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormsでやっていたことがNotionだけで完結します✌✨\n\n試しに使っていただけると幸いです😊\nhttps://www.noway-form.com/ja",
  tweetedAt: "2021/10/11",
}));

export const Contents: FC = () => {
  const isDesktop = useMediaQuery("sm");
  const gap = isDesktop ? 60 : 20;
  return (
    <>
      <TopBlogs />
      <Space h={gap} />
      <TopPortfolios />
      <Space h={gap} />
      {isDesktop && (
        <SimpleGrid cols={2} spacing={80}>
          <GithubRepositories repositories={repositories} />
          <Tweets tweets={tweets} />
        </SimpleGrid>
      )}
      {isDesktop || (
        <>
          <GithubRepositories repositories={repositories} />
          <Space h={gap} />
          <Tweets tweets={tweets} />
        </>
      )}
    </>
  );
};
