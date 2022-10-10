import { useQuery } from "@apollo/client";
import { Anchor, Center, ScrollArea, Stack } from "@mantine/core";
import SectionBottomButton from "components/atoms/SectionBottomButton";
import { SectionTitle } from "components/atoms/SectionTitle";
import RepositoryItem from "components/molecules/RepositoryItem";
import { repositoryLanguagesQuery } from "lib/github/query.graphql";
import { useMediaQuery } from "lib/mantine";
import React, { FC } from "react";
import { GithubRepository } from "types";
import { GetRepositoryLanguagesQuery } from "types/github";
import { queryToRepositories } from "utils/repositoriesQueryConverter";

type Props = {
  repositories: GithubRepository[];
  accountUrl: string;
  scrollHeight: number;
};

const GithubRepositories: FC<Props> = ({ repositories, accountUrl, scrollHeight }) => {
  const { data } = useQuery<GetRepositoryLanguagesQuery>(repositoryLanguagesQuery, {
    variables: { repositoriesFirst: 10, languagesFirst: 10 },
  });

  const items: GithubRepository[] = data ? queryToRepositories(data) : repositories;

  return (
    <Stack spacing={0}>
      <SectionTitle>GitHub</SectionTitle>
      <Stack spacing={24}>
        <ScrollArea style={{ height: scrollHeight }} pr={24}>
          <Stack spacing={40}>
            {items.map((repository) => (
              <RepositoryItem key={repository.id} repository={repository} />
            ))}
          </Stack>
        </ScrollArea>
        <Anchor
          href={accountUrl}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Center mt={8}>
            <SectionBottomButton label="View on GitHub" />
          </Center>
        </Anchor>
      </Stack>
    </Stack>
  );
};

export default GithubRepositories;
