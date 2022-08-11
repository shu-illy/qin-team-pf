import { Container } from "@mantine/core";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import React from "react";
import { Blog } from "components/organisms/Blog";
import { Portfolio } from "components/organisms/Portfolio";

export const Contents: React.FC = () => {
  const isDesktop = useMediaQuery("sm");
  const paddingX = isDesktop ? 240 : 16;
  return (
    <Container mx={0} px={paddingX}>
      <Blog isAll={false} />
      <Portfolio isAll={false} />
    </Container>
  );
};
