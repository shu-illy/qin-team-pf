import { createClient } from "microcms-js-sdk";

export const microCmsClient = createClient({
  serviceDomain: "dunqzqec2e",
  apiKey: process.env.NEXT_PUBLIC_API_KEY ?? "",
});
