import type { GetStaticProps, NextPage } from "next";
import { Layout } from "components/templates/Layout";
import { Contents } from "components/organisms/Contents";
import { Blog, GithubRepository, Portfolio, Tweet } from "types";
import { microCmsClient } from "lib/microcms/client";
import Blogs from "components/organisms/Blogs";
import { Portfolios } from "components/organisms/Portfolios";
import Tweets from "components/organisms/Tweets";
import GithubRepositories from "components/organisms/GithubRepositories";
import { fetchUserTweets } from "lib/twitter/client";
import { SWRConfig } from "swr";

type Props = {
  blogs: Blog[];
  portfolios: Portfolio[];
  repositories: GithubRepository[];
  tweets: Tweet[];
};

const Home: NextPage<Props> = (props) => {
  return (
    <Layout showTitleArea>
      <Contents
        blogs={<Blogs blogs={props.blogs} isAll={false} />}
        portfolios={<Portfolios isAll={false} portfolios={props.portfolios} />}
        tweets={
          <SWRConfig value={{ fallback: props.tweets }}>
            <Tweets />
          </SWRConfig>
        }
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

  const myTwitterUserId = process.env.MY_TWITTER_USER_ID as string;
  const twitterResponse = await fetchUserTweets(myTwitterUserId);
  if (twitterResponse.errors !== undefined || twitterResponse.data === undefined) {
    throw new Error("Failed to get tweets in getStaticProps");
  }

  const tweets = twitterResponse.data!;

  const props: Props = {
    blogs: blogData.contents,
    portfolios: portfolioData.contents,
    repositories: [],
    tweets: tweets,
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
