import { Group, Progress, Space, Stack, Text, useMantineTheme } from "@mantine/core";
import React, { FC } from "react";
import { GithubRepository, Language } from "types";

type Props = {
  languages: Language[];
  repository: GithubRepository;
};

type LanguageParams = {
  name: string;
  value: number;
  color: string;
};

const LanguagesPercentage: FC<Props> = ({ languages, repository }) => {
  const theme = useMantineTheme();
  const totalBytes = repository.totalSize;
  const languageParams: LanguageParams[] = languages.map((language: Language) => {
    const percentage = Math.floor((language.size / totalBytes) * 1000) / 10;
    const color = language.color;
    return { name: language.name, value: percentage, color: color };
  });
  return (
    <Stack>
      <Progress
        radius="xl"
        sections={languageParams.map((language) => {
          return { value: language.value, color: language.color };
        })}
      />
      <Group spacing={0}>
        {languageParams.map((language) => {
          const radius = 6;
          return (
            <Group key={language.name} spacing={6}>
              <div
                style={{
                  height: radius,
                  width: radius,
                  borderRadius: "50%",
                  backgroundColor: language.color,
                }}
              />
              <Text size={12} weight="bold">
                {language.name}
              </Text>
              <Text size={12} weight="bold" color={theme.colors.dark[2]}>
                {`${language.value}%`}
              </Text>
              <Space w={16} />
            </Group>
          );
        })}
      </Group>
    </Stack>
  );
};

export default LanguagesPercentage;
