import { microCmsClient } from "lib/microcms/client";
import useSWRInfinite from "swr/infinite";
import { Blog } from "types";

// 参考：
// https://swr.vercel.app/ja/examples/infinite-loading
// https://www.ibrahima-ndaw.com/blog/data-fetching-in-nextjs-using-useswr/

const fetcher = async (pageStr: string) => {
  const page = Number(pageStr);
  const countPerPage = 10;
  const data = await microCmsClient.get({
    endpoint: "blog",
    queries: { orders: "-publishedAt", limit: countPerPage, offset: countPerPage * (page - 1) },
  });
  return data.contents;
};

export const usePaginateBlogs = (initialData: Blog[]) => {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `${index + 1}`,
    fetcher,
    { fallbackData: initialData }
  );

  const items = data ? ([] as Blog[]).concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isReachingEnd = data?.slice(-1)[0]?.length === 0;

  return { items, error, mutate, isLoadingMore, size, setSize, isValidating, isReachingEnd };
};
