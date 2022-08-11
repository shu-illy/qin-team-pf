import { Center, Stack } from "@mantine/core";
import SectionBottomButton from "components/atoms/SectionBottomButton";
import { SectionTitle } from "components/atoms/SectionTitle";
import BlogItem from "components/molecules/BlogItem";
import React from "react";
import { Blog } from "types";

type Props = {
  blogs: Blog[];
  isAll: boolean;
};

const Blogs: React.FC<Props> = ({ blogs, isAll }) => {
  const items = isAll ? blogs : blogs.slice(0, 5);
  return (
    <>
      <SectionTitle>Blog</SectionTitle>
      <Stack spacing={24} mb={24}>
        {items.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </Stack>
      {isAll || (
        <Center>
          <SectionBottomButton label="View All" />
        </Center>
      )}
    </>
  );
};

export default Blogs;
