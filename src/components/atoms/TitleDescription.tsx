import { Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

export const TitleDescription = () => {
  const isDesktop = useMediaQuery("sm");
  return (
    <Text color="white" weight="bold" size={16}>
      リリーのポートフォリオのためのページです
    </Text>
  );
};
