import Blogs from "components/organisms/Blogs";
import { Layout } from "components/templates/Layout";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { usePaginateBlogs } from "lib/swr/usePaginageBlogs";
import { Center, Loader, Text } from "@mantine/core";
import { Blog } from "types";
import { microCmsClient } from "lib/microcms/client";

type Props = {
  blogs: Blog[];
};

const BlogPage: NextPage<Props> = ({ blogs }) => {
  const { items, error, isLoadingMore, size, setSize, isReachingEnd } = usePaginateBlogs(blogs);

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
        threshold={100}
        loader={
          <Center key={"loading"} mt={24}>
            <Loader />
          </Center>
        }
      >
        <Blogs blogs={items} isAll={true} />
      </InfiniteScroll>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  console.log(process.env.API_KEY);
  const data = await microCmsClient.get({
    endpoint: "blogs",
    queries: { orders: "-publishedAt" },
  });

  const props: Props = {
    blogs: data.contents,
  };

  return {
    props: props,
  };
};

export default BlogPage;
