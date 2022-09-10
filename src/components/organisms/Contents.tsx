import { SimpleGrid, Space } from "@mantine/core";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import React, { FC } from "react";

type Props = {
  blogs: JSX.Element;
  portfolios: JSX.Element;
  tweets: JSX.Element;
  repositories: JSX.Element;
};

export const Contents: FC<Props> = ({ blogs, portfolios, tweets, repositories }) => {
  const isDesktop = useMediaQuery("sm");
  const gap = isDesktop ? 60 : 20;
  return (
    <>
      {blogs}
      <Space h={gap} />
      {portfolios}
      <Space h={gap} />
      {isDesktop && (
        <SimpleGrid cols={2} spacing={80}>
          {repositories}
          {tweets}
        </SimpleGrid>
      )}
      {isDesktop || (
        <>
          {repositories}
          <Space h={gap} />
          {tweets}
        </>
      )}
    </>
  );
};
