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
import { ApolloProvider } from "@apollo/client";
import { fetchRepositories, githubApolloClient } from "lib/github/client";
import { queryToRepositories } from "utils/repositoriesQueryConverter";

type Props = {
  blogs: Blog[];
  portfolios: Portfolio[];
  repositories: GithubRepository[];
  tweets: Tweet[];
};

const Home: NextPage<Props> = ({ blogs, portfolios, repositories, tweets }) => {
  return (
    <Layout showTitleArea>
      <Contents
        blogs={<Blogs blogs={blogs} isAll={false} />}
        portfolios={<Portfolios isAll={false} portfolios={portfolios} />}
        tweets={
          <SWRConfig value={{ fallback: tweets }}>
            <Tweets />
          </SWRConfig>
        }
        repositories={
          <ApolloProvider client={githubApolloClient}>
            <GithubRepositories repositories={repositories} />
          </ApolloProvider>
        }
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

  const data = await fetchRepositories();
  const repositories = queryToRepositories(data);

  const props: Props = {
    blogs: blogData.contents,
    portfolios: portfolioData.contents,
    repositories: repositories,
    tweets: tweets,
  };

  return {
    props: props,
    revalidate: 600,
  };
};

export default Home;
