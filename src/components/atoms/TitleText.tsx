import { Title, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { FC } from "react";

export const TitleText: FC = () => {
  const isDesktop = useMediaQuery("sm");
  return (
    <Title>
      <Text color="white" weight="bold" size={isDesktop ? 36 : 28}>
        Lily IT University
      </Text>
    </Title>
  );
};
