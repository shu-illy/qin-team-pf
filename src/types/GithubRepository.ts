import { Language } from "types";

export type Languages = { name: Language; value: number }[];

export type GithubRepository = {
  id: number;
  title: string;
  description: string;
  star: number;
  fork: number;
  languages: Languages;
};
