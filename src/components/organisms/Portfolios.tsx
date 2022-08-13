import { Center, Grid, Space } from "@mantine/core";
import SectionBottomButton from "components/atoms/SectionBottomButton";
import { SectionTitle } from "components/atoms/SectionTitle";
import PortfolioItem from "components/molecules/PortfolioItem";
import React from "react";

type Props = {
  isAll: boolean;
};

export const Portfolios: React.FC<Props> = ({ isAll }) => {
  return (
    <>
      <SectionTitle>Portfolio</SectionTitle>
      <Grid gutter={24}>
        <Grid.Col span={4}>
          <PortfolioItem />
        </Grid.Col>
        <Grid.Col span={4}>
          <PortfolioItem />
        </Grid.Col>
        <Grid.Col span={4}>
          <PortfolioItem />
        </Grid.Col>
        <Grid.Col span={4}>
          <PortfolioItem />
        </Grid.Col>
        <Grid.Col span={4}>
          <PortfolioItem />
        </Grid.Col>
        <Grid.Col span={4}>
          <PortfolioItem />
        </Grid.Col>
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
