import { gql } from "@apollo/client";

export const repositoryLanguagesQuery = gql`query GetRepositoryLanguages($repositoriesFirst: Int, $languagesFirst: Int) {
  viewer {
    repositories(first: $repositoriesFirst, orderBy: { field: PUSHED_AT, direction: DESC }) {
      nodes {
        id
        name
        description
        url
        forkCount
        stargazerCount
        languages(first: $languagesFirst) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          totalSize
          totalCount
          edges {
            cursor
            node {
              id
              name
              color
            }
            size
          }
        }
      }
    }
  }
}
`;
