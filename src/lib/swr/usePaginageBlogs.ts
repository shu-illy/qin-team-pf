import useSWRInfinite from "swr/infinite";
import { Blog } from "types";

// 参考：
// https://swr.vercel.app/ja/examples/infinite-loading
// https://www.ibrahima-ndaw.com/blog/data-fetching-in-nextjs-using-useswr/

const fetcher = async (pageStr: string) => {
  const pageLimit = 5;
  const page = Number(pageStr);
  const countPerPage = 10;
  if (page > pageLimit) return [];
  // 300ms待ってダミーデータを返す
  await new Promise((resolve) => setTimeout(resolve, 300));
  const blogs: Blog[] = Array.from(new Array(countPerPage)).map((_, i) => {
    const id = (page - 1) * countPerPage + i + 1;
    return {
      id: id,
      title: `${id}. This is a header`,
      contents:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      publishedAt: "2022/7/11",
    };
  });
  return blogs;
};

export const usePaginateBlogs = () => {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `${index + 1}`,
    fetcher
  );

  const blogs = data ? ([] as Blog[]).concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isReachingEnd = data?.slice(-1)[0]?.length === 0;

  return { blogs, error, mutate, isLoadingMore, size, setSize, isValidating, isReachingEnd };
};
