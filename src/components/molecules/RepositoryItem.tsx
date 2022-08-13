import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import { GithubRepository } from "types";
import RepositoryStatistic from "components/molecules/RepositoryStatistic";
import LanguagesPercentage from "components/molecules/LanguagesPercentage";

type Props = {
  repository: GithubRepository;
};

const RepositoryItem: React.FC<Props> = ({ repository }) => {
  return (
    <Stack spacing={8}>
      <Text size={18} weight="bold">
        {repository.title}
      </Text>
      <Text size={16}>{repository.title}</Text>
      <Group spacing={18}>
        <RepositoryStatistic name="star" value={111} />
        <RepositoryStatistic name="fork" value={111} />
      </Group>
      <LanguagesPercentage languages={repository.languages} />
    </Stack>
  );
};

export default RepositoryItem;
