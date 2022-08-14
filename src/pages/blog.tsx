import Blogs from "components/organisms/Blogs";
import { Layout } from "components/templates/Layout";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Blog } from "types";
import InfiniteScroll from "react-infinite-scroller";
import { usePaginateBlogs } from "lib/swr/usePaginageBlogs";

type Props = {
  items: Blog[];
};

const BlogPage: NextPage<Props> = ({ items }) => {
  const { blogs, error, isLoadingMore, size, setSize, isReachingEnd } = usePaginateBlogs();

  // const loadMore = () => {
  //   setSize(size + 1);
  // };

  return (
    <Layout>
      <button disabled={false} onClick={() => setSize(size + 1)}>
        {isLoadingMore ? "Loading..." : isReachingEnd ? "No more posts" : "Load more"}
      </button>
      <Blogs blogs={blogs} isAll={true} />
      {/* <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={!isReachingEnd}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <button disabled={false} onClick={() => setSize(size + 1)}>
          {isLoadingMore ? "Loading..." : isReachingEnd ? "No more posts" : "Load more"}
        </button>
        <Blogs blogs={blogs} isAll={true} />
      </InfiniteScroll> */}
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
