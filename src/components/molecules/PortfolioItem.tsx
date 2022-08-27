import { Stack, Text, useMantineTheme } from "@mantine/core";
import Thumbnail from "components/atoms/Thumbnail";
import { dateFormatted } from "lib/dayjs/ext";
import React, { FC } from "react";
import { Portfolio } from "types";

type Props = {
  portfolio: Portfolio;
};

const PortfolioItem: FC<Props> = ({ portfolio }) => {
  const theme = useMantineTheme();
  return (
    <Stack spacing={8} pb={16}>
      <Thumbnail aspectWidth={314} aspectHeight={148} url={portfolio.thumbnail?.url} />
      <Text size={22} weight="bold" mt={8}>
        {portfolio.title}
      </Text>
      <Text size={16} lineClamp={4}>
        {portfolio.description}
      </Text>
      <Text size={12} weight="bold" color={theme.colors.dark[2]}>
        {`${dateFormatted(portfolio.startAt, "YYYY.M")} - ${dateFormatted(
          portfolio.endAt,
          "YYYY.M"
        )}`}
      </Text>
    </Stack>
  );
};

export default PortfolioItem;
