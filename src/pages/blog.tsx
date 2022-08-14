import Blogs from "components/organisms/Blogs";
import { Layout } from "components/templates/Layout";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Blog } from "types";
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
      <Center>
        <Text color="red">Failed to get blog articles.</Text>
      </Center>
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  // TODO ダミー用データ
  const blogs: Blog[] = Array.from(new Array(10)).map((_, i) => ({
    id: i + 1,
    title: "This is a header",
    contents:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    publishedAt: "2022/7/11",
  }));

  return {
    props: {
      items: blogs,
    },
    revalidate: 60,
  };
};

export default BlogPage;
