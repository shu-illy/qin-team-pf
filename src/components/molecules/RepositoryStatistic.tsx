import { IconStar, IconGitFork } from "@tabler/icons";
import React, { FC } from "react";
import { Group, Text, useMantineTheme } from "@mantine/core";

type Props = {
  name: "star" | "fork";
  value: number;
};

const RepositoryStatistic: FC<Props> = ({ name, value }) => {
  const theme = useMantineTheme();
  const color = theme.colors.dark[2];
  const stroke = 1.5;
  const icon = () => {
    {
      switch (name) {
        case "star":
          return <IconStar stroke={stroke} size={16} color={color} />;
        case "fork":
          return <IconGitFork stroke={stroke} size={16} color={color} />;
        default:
          const check: never = name;
      }
    }
  };
  return (
    <Group spacing={4} align="center">
      {icon()}
      <Text size={12} color={color} weight="bold">
        {value}
      </Text>
    </Group>
  );
};

export default RepositoryStatistic;
