import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

type Props = {
  shouldDisplay?: boolean;
};

export const ColorSchemeButton: React.FC<Props> = ({ shouldDisplay = true }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div
      style={{
        visibility: shouldDisplay ? "visible" : "hidden",
      }}
    >
      <ActionIcon
        variant="outline"
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
        sx={{
          "&:not(:disabled):active": { transform: "none" },
        }}
      >
        {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
      </ActionIcon>
    </div>
  );
};
