import { Anchor, Group, Stack, Text } from "@mantine/core";
import React, { FC } from "react";
import { GithubRepository } from "types";
import RepositoryStatistic from "components/molecules/RepositoryStatistic";
import LanguagesPercentage from "components/molecules/LanguagesPercentage";

type Props = {
  repository: GithubRepository;
};

const RepositoryItem: FC<Props> = ({ repository }) => {
  return (
    <Anchor
      href={repository.url}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Stack spacing={8}>
        <Text size={18} weight="bold">
          {repository.name}
        </Text>
        <Text size={16}>{repository.description}</Text>
        <Group spacing={18}>
          <RepositoryStatistic name="star" value={repository.stargazerCount} />
          <RepositoryStatistic name="fork" value={repository.forkCount} />
        </Group>
        <LanguagesPercentage languages={repository.languages} repository={repository} />
      </Stack>
    </Anchor>
  );
};

export default RepositoryItem;
