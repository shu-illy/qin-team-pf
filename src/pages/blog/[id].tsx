import BlogShow from "components/organisms/BlogShow";
import { Layout } from "components/templates/Layout";
import { microCmsClient } from "lib/microcms/client";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { Blog, BlogResponse } from "types";

type Props = {
  blog: Blog;
};

const BlogPage: NextPage<Props> = ({ blog }) => {
  return (
    <Layout>
      <BlogShow blog={blog} />
    </Layout>
  );
};

type PathParams = {
  id: string;
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const data: BlogResponse = await microCmsClient.get({
    endpoint: "blog",
  });
  const blogs = data.contents;
  const paths = blogs.map((blog) => {
    return {
      params: {
        id: blog.id,
      },
    };
  });
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const id = ctx.params?.id as string;
  try {
    const blog: Blog = await microCmsClient.get({
      endpoint: "blog",
      contentId: id,
    });
    return {
      props: {
        blog: blog,
      },
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default BlogPage;
