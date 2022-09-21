import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GetRepositoryLanguagesQuery } from "types/github";
import { repositoryLanguagesQuery } from "lib/github/query.graphql";

export const githubApolloClient = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}` },
  cache: new InMemoryCache(),
});

export const fetchRepositories = async () => {
  const result = await githubApolloClient.query<GetRepositoryLanguagesQuery>({
    query: repositoryLanguagesQuery,
    variables: { repositoriesFirst: 10, languagesFirst: 10 },
  });
  return result.data;
};
