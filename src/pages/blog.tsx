import Blogs from "components/organisms/Blogs";
import { Layout } from "components/templates/Layout";
import { NextPage } from "next";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { usePaginateBlogs } from "lib/swr/usePaginageBlogs";
import { Center, Loader, Text } from "@mantine/core";

const BlogPage: NextPage = () => {
  const { blogs, error, isLoadingMore, size, setSize, isReachingEnd } = usePaginateBlogs();

  const loadMore = () => {
    if (!isLoadingMore && !isReachingEnd) {
      setSize(size + 1);
    }
  };

  if (error) {
    return (
      <Layout>
        <Center>
          <Text color="red">Failed to get blog articles.</Text>
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
        threshold={500}
        loader={
          <Center key={"loading"} mt={24}>
            <Loader />
          </Center>
        }
      >
        <Blogs blogs={blogs} isAll={true} />
      </InfiniteScroll>
    </Layout>
  );
};

export default BlogPage;
