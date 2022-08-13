import { Image, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";

const PortfolioItem = () => {
  const theme = useMantineTheme();
  return (
    <Stack spacing={8} pb={16}>
      <Image radius="sm" src="https://picsum.photos/315/184" alt="portfolio image" />
      <Text size={22} weight="bold" mt={8}>
        IT KINGDOM
      </Text>
      <Text size={16}>
        当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
      </Text>
      <Text size={12} weight="bold" color={theme.colors.dark[2]}>
        2021.10 - 2021.12
      </Text>
    </Stack>
  );
};

export default PortfolioItem;
