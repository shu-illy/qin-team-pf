import { Group, Progress, Space, Stack, Text, useMantineTheme } from "@mantine/core";
import { languageColors } from "lib/github/languageColors";
import React, { FC } from "react";
import { Languages } from "types";

type Props = {
  languages: Languages;
};

const LanguagesPercentage: FC<Props> = ({ languages }) => {
  const theme = useMantineTheme();
  const totalBytes = languages
    .map((language) => language.value)
    .reduce((sum, element) => sum + element, 0);
  const languageParams = languages.map((language) => {
    const percentage = Math.floor((language.value / totalBytes) * 1000) / 10;
    const color = languageColors[language.name];
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
