import { Center, Loader, Text } from "@mantine/core";
import { Portfolios } from "components/organisms/Portfolios";
import { Layout } from "components/templates/Layout";
import { GetStaticProps, NextPage } from "next";
import InfiniteScroll from "react-infinite-scroller";
import React from "react";
import { usePaginatePortfolios } from "lib/swr/usePaginatePortfolios";
import { Portfolio } from "types";
import { microCmsClient } from "lib/microcms/client";

type Props = {
  portfolios: Portfolio[];
};

const PortfolioPage: NextPage<Props> = ({ portfolios }) => {
  const { items, error, isLoadingMore, size, setSize, isReachingEnd } =
    usePaginatePortfolios(portfolios);

  const loadMore = () => {
    if (!isLoadingMore && !isReachingEnd) {
      setSize(size + 1);
    }
  };

  if (error) {
    return (
      <Layout>
        <Center>
          <Text color="red">Failed to get portfolios.</Text>
        </Center>
      </Layout>
    );
  }

  return (
    <Layout>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={!isReachingEnd}
        threshold={100}
        loader={
          <Center key={"loading"} mt={24}>
            <Loader />
          </Center>
        }
      >
        <Portfolios portfolios={items} isAll />
      </InfiniteScroll>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await microCmsClient.get({
    endpoint: "portfolio",
    queries: { orders: "-publishedAt" },
  });

  const props: Props = {
    portfolios: data.contents,
  };

  return {
    props: props,
  };
};

export default PortfolioPage;
