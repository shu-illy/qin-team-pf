import { Container, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { useMediaQuery } from "src/lib/mantine/useMediaQuery";

export const TitleArea = () => {
  const isDesktop = useMediaQuery("sm");
  const paddingX = isDesktop ? 224 : 16;
  const paddingY = isDesktop ? 85.5 : 53.5;
  return (
    <>
      <Container
        mx={0}
        px={paddingX}
        py={paddingY}
        size={99999}
        sx={(theme) => ({
          backgroundColor: theme.colors.pink[6],
          width: "100%",
        })}
      >
        <Title>
          <Text color="white">Lily IT University</Text>
        </Title>
      </Container>
    </>
  );
};
