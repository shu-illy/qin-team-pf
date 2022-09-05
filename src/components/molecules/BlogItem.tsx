import { Blog } from "types";
import React, { FC } from "react";
import NextLink from "next/link";
import { Stack, Text, useMantineTheme } from "@mantine/core";
import { dateFormatted } from "lib/dayjs/ext";
import { htmlToText } from "utils/htmlConverter";
import { pagesPath } from "utils/$path";

type Props = {
  blog: Blog;
};

const BlogItem: FC<Props> = ({ blog }) => {
  const theme = useMantineTheme();
  return (
    <Stack spacing={8}>
      <NextLink href={pagesPath.blog._id(blog.id).$url()} passHref prefetch={false}>
        <Text my={0} component="h3" size={22} className="cursor-pointer">
          {blog.title}
        </Text>
      </NextLink>
      <Text size={16} lineClamp={3}>
        {htmlToText(blog.content)}
      </Text>
      <Text size={12} color={theme.colors.dark[2]} weight="bold">
        {dateFormatted(blog.publishedAt!, "YYYY/MM/DD")}
      </Text>
    </Stack>
  );
};

export default BlogItem;
