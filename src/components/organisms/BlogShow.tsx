import { Space, Stack, useMantineTheme, Text, TypographyStylesProvider } from "@mantine/core";
import { SectionTitle } from "components/atoms/SectionTitle";
import { dateFormatted } from "lib/dayjs/ext";
import React, { FC } from "react";
import { Blog } from "types";

type Props = {
  blog: Blog;
};

const BlogShow: FC<Props> = ({ blog }) => {
  const theme = useMantineTheme();
  return (
    <Stack spacing={0}>
      <SectionTitle>{blog.title}</SectionTitle>
      <Text size={12} color={theme.colors.dark[2]} weight="bold">
        {dateFormatted(blog.publishedAt!, "YYYY/MM/DD")}
      </Text>
      <Space h={8} />
      <TypographyStylesProvider sx={{ overflowWrap: "break-word" }}>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </TypographyStylesProvider>
    </Stack>
  );
};

export default BlogShow;
