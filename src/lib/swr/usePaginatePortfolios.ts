import { microCmsClient } from "lib/microcms/client";
import useSWRInfinite from "swr/infinite";
import { Portfolio } from "types";

// 参考：
// https://swr.vercel.app/ja/examples/infinite-loading
// https://www.ibrahima-ndaw.com/blog/data-fetching-in-nextjs-using-useswr/

const fetcher = async (key: string) => {
  const [endpoint, pageStr] = key.split("/");
  const page = Number(pageStr);
  const countPerPage = 9;
  const data = await microCmsClient.get({
    endpoint,
    queries: { orders: "-publishedAt", limit: countPerPage, offset: countPerPage * (page - 1) },
  });
  return data.contents;
};

export const usePaginatePortfolios = (initialData: Portfolio[]) => {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `portfolio/${index + 1}`,
    fetcher,
    { fallbackData: initialData }
  );

  const items = data ? ([] as Portfolio[]).concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isReachingEnd = data?.slice(-1)[0]?.length === 0;

  return { items, error, mutate, isLoadingMore, size, setSize, isValidating, isReachingEnd };
};
