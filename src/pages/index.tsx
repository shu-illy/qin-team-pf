import type { NextPage } from "next";
import { Layout } from "components/templates/Layout";
import { Contents } from "components/organisms/Contents";

const Home: NextPage = () => {
  return (
    <Layout showTitleArea>
      <Contents />
    </Layout>
  );
};

export default Home;
