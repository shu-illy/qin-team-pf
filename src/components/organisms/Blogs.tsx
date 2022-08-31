import { Center, Stack } from "@mantine/core";
import SectionBottomButton from "components/atoms/SectionBottomButton";
import { SectionTitle } from "components/atoms/SectionTitle";
import BlogItem from "components/molecules/BlogItem";
import React, { FC } from "react";
import NextLink from "next/link";
import { Blog } from "types";
import { pagesPath } from "utils/$path";

type Props = {
  blogs: Blog[];
  isAll: boolean;
};

const Blogs: FC<Props> = ({ blogs, isAll }) => {
  const items = isAll ? blogs : blogs.slice(0, 5);
  return (
    <Stack spacing={0}>
      <SectionTitle>Blog</SectionTitle>
      <Stack spacing={24}>
        {items.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
        {isAll || (
          <NextLink href={pagesPath.blog.$url()} passHref>
            <Center mt={24}>
              <SectionBottomButton label="View All" />
            </Center>
          </NextLink>
        )}
      </Stack>
    </Stack>
  );
};

export default Blogs;
