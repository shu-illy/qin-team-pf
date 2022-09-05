import { Center, Grid, Space, Stack } from "@mantine/core";
import SectionBottomButton from "components/atoms/SectionBottomButton";
import { SectionTitle } from "components/atoms/SectionTitle";
import PortfolioItem from "components/molecules/PortfolioItem";
import { useMediaQuery } from "lib/mantine";
import React, { FC } from "react";
import NextLink from "next/link";
import { Portfolio } from "types";
import { pagesPath } from "utils/$path";

type Props = {
  portfolios: Portfolio[];
  isAll: boolean;
};

export const Portfolios: FC<Props> = ({ portfolios, isAll }) => {
  const isDesktop = useMediaQuery("sm");
  const items = isAll ? portfolios : portfolios.slice(0, 6);
  return (
    <Stack spacing={0}>
      <SectionTitle>Portfolio</SectionTitle>
      <Grid gutter={24}>
        {items.map((portfolio) => (
          <Grid.Col key={portfolio.id} span={isDesktop ? 4 : 12}>
            <PortfolioItem portfolio={portfolio} />
          </Grid.Col>
        ))}
      </Grid>
      <Space h={34} />
      {isAll || (
        <NextLink href={pagesPath.portfolio.$url()} passHref>
          <Center>
            <SectionBottomButton label="View All" />
          </Center>
        </NextLink>
      )}
    </Stack>
  );
};
