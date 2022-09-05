import type { GetStaticProps, NextPage } from "next";
import { Layout } from "components/templates/Layout";
import { Contents } from "components/organisms/Contents";
import { atom, useSetRecoilState } from "recoil";
import { Blog, GithubRepository, Portfolio, Tweet } from "types";
import { microCmsClient } from "lib/microcms/client";

type Props = {
  blogs: Blog[];
  portfolios: Portfolio[];
  repositories: GithubRepository[];
  tweets: Tweet[];
};

export const topContentsState = atom<Props>({
  key: "TopContents",
  default: {
    blogs: [],
    portfolios: [],
    repositories: [],
    tweets: [],
  },
});

const Home: NextPage<Props> = (props) => {
  const setTopContents = useSetRecoilState(topContentsState);
  setTopContents(props);
  return (
    <Layout showTitleArea>
      <Contents />
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
  };
};

export default Home;
