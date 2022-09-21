import { GithubRepository, Language } from "types";
import { GetRepositoryLanguagesQuery } from "types/github";

export const queryToRepositories = (data: GetRepositoryLanguagesQuery): GithubRepository[] => {
  return data.viewer.repositories.nodes!.map((repository) => ({
    id: repository?.id ?? "",
    name: repository?.name ?? "",
    totalSize: repository?.languages?.totalSize ?? 0,
    description: repository?.description ?? "",
    forkCount: repository!.forkCount ?? 0,
    stargazerCount: repository!.stargazerCount ?? 0,
    languages: repository!.languages!.edges!.map((language) => {
      const languageInfo: Language = {
        name: language?.node.name ?? "",
        color: language?.node.color ?? "",
        size: language?.size ?? 0,
      };
      return languageInfo;
    }),
  }));
};
