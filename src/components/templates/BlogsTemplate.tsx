import { Container, Space } from "@mantine/core";
import Blogs from "components/organisms/Blogs";
import { useMediaQuery } from "lib/mantine";
import React from "react";
import { Blog } from "types";

type Props = {
  blogs: Blog[];
};

const BlogsTemplate: React.FC<Props> = ({ blogs }) => {
  const isDesktop = useMediaQuery("sm");
  const paddingX = isDesktop ? 240 : 16;
  return (
    <Container mx={0} px={paddingX} size={99999}>
      <Space h={40} />
      <Blogs blogs={blogs} isAll={true} />
    </Container>
  );
};

export default BlogsTemplate;
