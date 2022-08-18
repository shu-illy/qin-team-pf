import { Container, Space, Stack, Text } from "@mantine/core";
import { SectionTitle } from "components/atoms/SectionTitle";
import { useMediaQuery } from "lib/mantine";
import React, { FC } from "react";

const About: FC = () => {
  return (
    <Stack spacing={0}>
      <SectionTitle>About</SectionTitle>
      <Text size={22} mt={0} mb={24} component="h3">
        Lightsound Shimabu
      </Text>
      <Text>
        ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
      </Text>
    </Stack>
  );
};

export default About;
