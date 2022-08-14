import useSWRInfinite from "swr/infinite";
import { Portfolio } from "types";

// 参考：
// https://swr.vercel.app/ja/examples/infinite-loading
// https://www.ibrahima-ndaw.com/blog/data-fetching-in-nextjs-using-useswr/

const fetcher = async (pageStr: string) => {
  const pageLimit = 5;
  const page = Number(pageStr);
  const countPerPage = 9;
  if (page > pageLimit) return [];
  // 1秒待ってダミーデータを返す
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const portfolios: Portfolio[] = Array.from(new Array(countPerPage)).map((_, i) => {
    const id = (page - 1) * countPerPage + i + 1;
    return {
      id: id,
      title: `${id}. IT KINGDOM`,
      cover: "https://picsum.photos/315/184",
      description:
        "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
      startAt: "2021/10/11",
      endAt: "2021/12/4",
    };
  });
  return portfolios;
};

export const usePaginatePortfolios = () => {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `${index + 1}`,
    fetcher
  );

  const portfolios = data ? ([] as Portfolio[]).concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isReachingEnd = data?.slice(-1)[0]?.length === 0;

  return { portfolios, error, mutate, isLoadingMore, size, setSize, isValidating, isReachingEnd };
};
