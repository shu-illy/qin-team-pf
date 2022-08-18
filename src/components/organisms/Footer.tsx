import { Text, createStyles, Center } from "@mantine/core";
import React, { FC } from "react";

const useStyles = createStyles((theme) => ({
  inner: {
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

type Props = {
  height: number;
};

export const Footer: FC<Props> = ({ height }) => {
  const { classes } = useStyles();
  return (
    <footer className={`w-full px-4 h-[${height}px] mt-[68px]`}>
      <div className={classes.inner}></div>
      <Center style={{ height: height }}>
        <Text size={10} color="dimmed" weight="bold">
          © 2022 Lily IT University
        </Text>
      </Center>
    </footer>
  );
};
