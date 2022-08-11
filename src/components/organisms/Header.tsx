import { createStyles, Text, Header as MantineHeader, Group, Burger, Paper } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import { useMantineTheme } from "@mantine/core";
import { useTextColor, useBackgroundColor } from "lib/mantine";
import { ColorSchemeButton } from "components/atoms/ColorSchemeButton";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
    backgroundColor: theme.colors.pink[6],
    height: "100%",

    [theme.fn.largerThan("sm")]: {
      display: "none",
      borderWidth: 0,
    },
  },

  headerItemGroup: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  link: {
    borderRadius: theme.radius.sm,
    cursor: "pointer",

    [theme.fn.smallerThan("md")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
      color: theme.white,
    },
  },
}));

export const Header: React.FC = () => {
  const links = [
    {
      link: "#about",
      label: "About",
    },
    {
      link: "#blog",
      label: "Blog",
    },
    {
      link: "#portfolio",
      label: "Portfolio",
    },
    {
      link: "#contact",
      label: "Contact",
    },
  ];
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const isDesktop = useMediaQuery("md");
  const paddingX = isDesktop ? 224 : 16;
  const theme = useMantineTheme();
  const textColor = useTextColor();
  const backgroundColor = useBackgroundColor();

  const items = links.map((link) => (
    <Link key={link.label} href={link.link}>
      <Text size={18} weight={700} className={classes.link} onClick={() => close()}>
        {link.label}
      </Text>
    </Link>
  ));

  return (
    <MantineHeader
      height={HEADER_HEIGHT}
      px={paddingX}
      withBorder={false}
      style={{
        backgroundColor: opened ? theme.colors.pink[6] : backgroundColor,
        border: 0,
        zIndex: 1,
      }}
    >
      <Group
        position="apart"
        className={classes.headerItemGroup}
        color={opened ? theme.colors.pink[6] : theme.white}
      >
        {isDesktop || (
          <Burger
            opened={opened}
            color={opened ? theme.white : textColor}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            style={{ zIndex: 1 }}
          />
        )}

        {opened || (
          <Text size={18} weight={700}>
            Lily IT University
          </Text>
        )}

        <Group spacing={16}>
          {isDesktop && items}
          <ColorSchemeButton shouldDisplay={!opened} />
        </Group>

        {opened && <Paper className={classes.dropdown}>{items}</Paper>}
      </Group>
    </MantineHeader>
  );
};
