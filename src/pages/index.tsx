import type { GetStaticProps, NextPage } from "next";
import { Layout } from "components/templates/Layout";
import { Contents } from "components/organisms/Contents";
import { Blog, GithubRepository, Portfolio, Tweet } from "types";
import { microCmsClient } from "lib/microcms/client";
import Blogs from "components/organisms/Blogs";
import { Portfolios } from "components/organisms/Portfolios";
import Tweets from "components/organisms/Tweets";
import GithubRepositories from "components/organisms/GithubRepositories";

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
  };
};

export default Home;

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
