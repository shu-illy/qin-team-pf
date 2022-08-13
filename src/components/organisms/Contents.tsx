import { Container, Space } from "@mantine/core";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import React from "react";
import { Portfolios } from "components/organisms/Portfolios";
import Blogs from "components/organisms/Blogs";
import { Blog, Portfolio } from "types";

// TODO ダミー用データ
const blogs: Blog[] = Array.from(new Array(10)).map((_, i) => ({
  id: i + 1,
  title: "This is a header",
  contents:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  publishedAt: "2022/7/11",
}));

// TODO ダミー用データ
const portfolios: Portfolio[] = Array.from(new Array(30)).map((_, i) => ({
  id: i + 1,
  title: "IT KINGDOM",
  description:
    "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
  startAt: "2021/10/11",
  endAt: "2021/12/4",
}));

export const Contents: React.FC = () => {
  const isDesktop = useMediaQuery("sm");
  const paddingX = isDesktop ? 240 : 16;
  const gap = isDesktop ? 100 : 60;
  return (
    <Container mx={0} px={paddingX} size={99999}>
      <Blogs blogs={blogs} isAll={false} />
      <Space h={gap} />
      <Portfolios isAll={false} portfolios={portfolios} />
      <Space h={gap} />
    </Container>
  );
};
