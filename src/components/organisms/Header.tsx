import {
  createStyles,
  Text,
  Header as MantineHeader,
  Group,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NextLink from "next/link";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import { useMantineTheme } from "@mantine/core";
import { useTextColor, useBackgroundColor } from "lib/mantine";
import { ColorSchemeButton } from "components/atoms/ColorSchemeButton";
import { FC } from "react";
import { pagesPath } from "utils/$path";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  headerItemGroup: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  link: {
    borderRadius: theme.radius.sm,
    cursor: "pointer",
  },
}));

export const Header: FC = () => {
  const links = [
    {
      link: pagesPath.about.$url(),
      label: "About",
    },
    {
      link: pagesPath.blog.$url(),
      label: "Blog",
    },
    {
      link: pagesPath.portfolio.$url(),
      label: "Portfolio",
    },
    {
      link: pagesPath.contact.$url(),
      label: "Contact",
    },
  ];
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const isDesktop = useMediaQuery("md");
  const paddingX = isDesktop ? 224 : 16;
  const theme = useMantineTheme();
  const textColor = useTextColor();

  const items = links.map((link) => (
    <NextLink key={link.label} href={link.link}>
      <Text size={18} weight={700} className={classes.link} onClick={() => close()}>
        {link.label}
      </Text>
    </NextLink>
  ));

  const burger = (
    <Burger opened={opened} color={opened ? theme.white : textColor} onClick={toggle} size="sm" />
  );

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => close()}
        withCloseButton={false}
        size="xl"
        title={burger}
        styles={(theme) => ({
          header: {
            paddingLeft: paddingX,
            height: `${HEADER_HEIGHT}px`,
            marginBottom: 0,
          },
          drawer: {
            backgroundColor: theme.colors.pink[6],
            color: theme.white,
          },
        })}
      >
        <Stack spacing={16} pl={24}>
          {items}
        </Stack>
      </Drawer>

      <MantineHeader
        height={HEADER_HEIGHT}
        px={paddingX}
        withBorder={false}
        style={{
          border: 0,
          zIndex: 1,
        }}
      >
        <Group position="apart" className={classes.headerItemGroup} color={theme.white}>
          {isDesktop || burger}

          <NextLink href={"/"} passHref>
            <Text size={18} weight={700} component="a">
              Lily IT University
            </Text>
          </NextLink>

          <Group spacing={16}>
            {isDesktop && items}
            <ColorSchemeButton />
          </Group>
        </Group>
      </MantineHeader>
    </>
  );
};
