import { useMantineTheme } from "@mantine/core";
export const useBackgroundColor = () => {
  const theme = useMantineTheme();
  if (theme.colorScheme === "light") return theme.white;

  return theme.colors.dark[7];
};
