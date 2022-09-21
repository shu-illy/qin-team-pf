export type Language = {
  name: string;
  size: number;
  color: string;
};

export type GithubRepository = {
  id: string;
  name: string;
  totalSize: number;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  languages: Language[];
};
