import { Center, Loader, Text } from "@mantine/core";
import { Portfolios } from "components/organisms/Portfolios";
import { Layout } from "components/templates/Layout";
import { NextPage } from "next";
import InfiniteScroll from "react-infinite-scroller";
import React from "react";
import { usePaginatePortfolios } from "lib/swr/usePaginatePortfolios";

const PortfolioPage: NextPage = () => {
  const { portfolios, error, isLoadingMore, size, setSize, isReachingEnd } =
    usePaginatePortfolios();

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
        threshold={200}
        loader={
          <Center key={"loading"} mt={24}>
            <Loader />
          </Center>
        }
      >
        <Portfolios portfolios={portfolios} isAll />
      </InfiniteScroll>
    </Layout>
  );
};

export default PortfolioPage;
