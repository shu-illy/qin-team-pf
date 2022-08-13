import { Container, Space } from "@mantine/core";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import React from "react";
import { Portfolio } from "components/organisms/Portfolio";
import Blogs from "components/organisms/Blogs";
import { Blog } from "types";

const blogs: Blog[] = Array.from(new Array(10)).map((_, i) => ({
  id: i,
  title: "This is a header",
  contents:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  publishedAt: "2022/7/11",
}));

export const Contents: React.FC = () => {
  const isDesktop = useMediaQuery("sm");
  const paddingX = isDesktop ? 240 : 16;
  const gap = isDesktop ? 100 : 60;
  return (
    <Container mx={0} px={paddingX} size={99999}>
      <Blogs blogs={blogs} isAll={false} />
      <Space h={gap} />
      <Portfolio isAll={false} />
    </Container>
  );
};
