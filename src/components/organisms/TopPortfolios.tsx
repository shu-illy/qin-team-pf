import { topContentsState } from "pages";
import React from "react";
import { selector, useRecoilValue } from "recoil";
import { Portfolios } from "components/organisms/Portfolios";

const topPortfoliosState = selector({
  key: "TopPortfolios",
  get: ({ get }) => {
    const topContents = get(topContentsState);
    return topContents.portfolios;
  },
});

const TopPortfolios = () => {
  const portfolios = useRecoilValue(topPortfoliosState);
  return <Portfolios isAll={false} portfolios={portfolios} />;
};

export default TopPortfolios;
