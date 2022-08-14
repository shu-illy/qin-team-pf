import { Image, Stack, Text, useMantineTheme } from "@mantine/core";
import { dateFormatted } from "lib/dayjs/ext";
import React from "react";
import { Portfolio } from "types";

type Props = {
  portfolio: Portfolio;
};

const PortfolioItem: React.FC<Props> = ({ portfolio }) => {
  const theme = useMantineTheme();
  return (
    <Stack spacing={8} pb={16}>
      <Image radius="sm" src={portfolio.cover} alt="portfolio image" withPlaceholder />
      <Text size={22} weight="bold" mt={8}>
        {portfolio.title}
      </Text>
      <Text size={16}>{portfolio.description}</Text>
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
