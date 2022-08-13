import { Center, Grid, Space } from "@mantine/core";
import SectionBottomButton from "components/atoms/SectionBottomButton";
import { SectionTitle } from "components/atoms/SectionTitle";
import PortfolioItem from "components/molecules/PortfolioItem";
import React from "react";
import { Portfolio } from "types";

type Props = {
  portfolios: Portfolio[];
  isAll: boolean;
};

export const Portfolios: React.FC<Props> = ({ portfolios, isAll }) => {
  const items = isAll ? portfolios : portfolios.slice(0, 6);
  return (
    <>
      <SectionTitle>Portfolio</SectionTitle>
      <Grid gutter={24}>
        {items.map((portfolio) => (
          <Grid.Col key={portfolio.id} span={4}>
            <PortfolioItem portfolio={portfolio} />
          </Grid.Col>
        ))}
      </Grid>
      <Space h={34} />
      {isAll || (
        <Center>
          <SectionBottomButton label="View All" />
        </Center>
      )}
    </>
  );
};
