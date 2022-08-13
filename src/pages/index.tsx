import type { NextPage } from "next";
import { Layout } from "components/templates/Layout";
import { Contents } from "components/organisms/Contents";
import { TitleArea } from "components/organisms/TitleArea";
import { Space } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <Layout>
      <TitleArea />
      <Space h={80} />
      <Contents />
    </Layout>
  );
};

export default Home;
