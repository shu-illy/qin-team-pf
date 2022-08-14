import { Portfolios } from "components/organisms/Portfolios";
import { Layout } from "components/templates/Layout";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Portfolio } from "types";

type Props = {
  portfolios: Portfolio[];
};

const PortfolioPage: NextPage<Props> = ({ portfolios }) => {
  return (
    <Layout>
      <Portfolios portfolios={portfolios} isAll={true} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // TODO ダミー用データ
  const portfolios: Portfolio[] = Array.from(new Array(30)).map((_, i) => ({
    id: i + 1,
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    startAt: "2021/10/11",
    endAt: "2021/12/4",
  }));

  return {
    props: {
      portfolios: portfolios,
    },
    revalidate: 60,
  };
};

export default PortfolioPage;
