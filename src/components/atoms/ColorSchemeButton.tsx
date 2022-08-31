import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { FC } from "react";

export const ColorSchemeButton: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      // onClick={() => toggleColorScheme()}
      onClick={() => {}}
      title="Toggle color scheme"
      sx={{
        "&:not(:disabled):active": { transform: "none" },
      }}
    >
      {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  );
};
