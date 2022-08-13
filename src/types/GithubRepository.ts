export type GithubRepository = {
  id: number;
  title: string;
  description: string;
  star: number;
  fork: number;
  languages: { [language: string]: number };
};
