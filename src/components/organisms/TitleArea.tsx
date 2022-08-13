import { Container, Stack, Group, Space } from "@mantine/core";
import React from "react";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import { TitleText } from "components/atoms/TitleText";
import { TitleDescription } from "components/atoms/TitleDescription";
import { ShareButtons } from "components/molecules/ShareButtons";

export const TitleArea: React.FC = () => {
  const isDesktop = useMediaQuery("sm");
  const paddingX = isDesktop ? 224 : 16;
  const paddingY = isDesktop ? 85.5 : 53.5;
  return (
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
      {isDesktop && (
        <Group position="apart">
          <Stack>
            <TitleText />
            <TitleDescription />
          </Stack>
          <ShareButtons />
        </Group>
      )}
      {isDesktop || (
        <Stack spacing={4}>
          <TitleText />
          <TitleDescription />
          <Space h={40} />
          <ShareButtons />
        </Stack>
      )}
    </Container>
  );
};
