import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}` },
  cache: new InMemoryCache(),
});

export const fetchRepositories = async () => {
  const searchQuery = gql`
      query {
        viewer {
          repositories(first: 10, orderBy: { field: PUSHED_AT, direction: DESC }) {
            nodes {
              id
              name
              forkCount
              stargazerCount
              languages(first: 10) {
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
  const result = await apolloClient.query({ query: searchQuery });
  const data = result.data;
};
