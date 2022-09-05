import { Stack, Text } from "@mantine/core";
import { SectionTitle } from "components/atoms/SectionTitle";
import React, { FC } from "react";

const About: FC = () => {
  return (
    <Stack spacing={0}>
      <SectionTitle>About</SectionTitle>
      <Text size={22} mt={0} mb={24} component="h3">
        Lily
      </Text>
      <Text>
        Webエンジニア。京都大学工学部・京都大学大学院工学研究科卒。新卒で大手重工メーカーに入社し、2021年にWebエンジニアにキャリアチェンジ。
      </Text>
    </Stack>
  );
};

export default About;
