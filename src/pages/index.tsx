import type { GetStaticProps, NextPage } from "next";
import { Layout } from "components/templates/Layout";
import { Contents } from "components/organisms/Contents";
import { Blog, GithubRepository, Portfolio, Tweet } from "types";
import { microCmsClient } from "lib/microcms/client";
import Blogs from "components/organisms/Blogs";
import { Portfolios } from "components/organisms/Portfolios";
import Tweets from "components/organisms/Tweets";
import GithubRepositories from "components/organisms/GithubRepositories";
import useSWR from "swr";
import axios from "axios";

type Props = {
  blogs: Blog[];
  portfolios: Portfolio[];
  repositories: GithubRepository[];
  tweets: Tweet[];
};

const twitterFetcher = async (url: string): Promise<Tweet[]> => {
  const res = await axios.get(url);
  return res.data;
};

const Home: NextPage<Props> = (props) => {
  const myTwitterUserId = process.env.MY_TWITTER_USER_ID as string;
  const twitterResult = useSWR(`/api/user-tweets/${myTwitterUserId}`, twitterFetcher, {
    fallbackData: props.tweets,
  });
  const tweets = twitterResult.data ?? [];

  return (
    <Layout showTitleArea>
      <Contents
        blogs={<Blogs blogs={props.blogs} isAll={false} />}
        portfolios={<Portfolios isAll={false} portfolios={props.portfolios} />}
        tweets={<Tweets tweets={tweets} />}
        repositories={<GithubRepositories repositories={repositories} />}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await microCmsClient.get({
    endpoint: "blog",
    queries: { orders: "-publishedAt" },
  });

  const portfolioData = await microCmsClient.get({
    endpoint: "portfolio",
    queries: { orders: "-publishedAt" },
  });

  const props: Props = {
    blogs: blogData.contents,
    portfolios: portfolioData.contents,
    repositories: [],
    tweets: [],
  };

  return {
    props: props,
    revalidate: 600,
  };
};

export default Home;

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
