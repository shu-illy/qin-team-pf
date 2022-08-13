import { Center, Stack } from "@mantine/core";
import SectionBottomButton from "components/atoms/SectionBottomButton";
import { SectionTitle } from "components/atoms/SectionTitle";
import RepositoryItem from "components/molecules/RepositoryItem";
import React from "react";
import { GithubRepository } from "types";

type Props = {
  repositories: GithubRepository[];
};

const GithubRepositories: React.FC<Props> = ({ repositories }) => {
  const items = repositories.slice(0, 5);
  return (
    <Stack spacing={0}>
      <SectionTitle>GitHub</SectionTitle>
      <Stack spacing={24}>
        {items.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
        <Center mt={8}>
          <SectionBottomButton label="View on GitHub" />
        </Center>
      </Stack>
    </Stack>
  );
};

export default GithubRepositories;
