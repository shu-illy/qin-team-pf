import type { NextPage } from "next";
import { Layout } from "components/templates/Layout";
import { Contents } from "components/organisms/Contents";
import { TitleArea } from "components/organisms/TitleArea";

const Home: NextPage = () => {
  return (
    <Layout>
      <TitleArea />
      <Contents />
    </Layout>
  );
};

export default Home;
