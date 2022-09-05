import { MicroCmsPicture } from "types";

export type Portfolio = {
  id: string;
  title: string;
  thumbnail: MicroCmsPicture;
  description: string;
  startAt: string;
  endAt: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
};
