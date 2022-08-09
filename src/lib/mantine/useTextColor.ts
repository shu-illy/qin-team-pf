import { useMantineTheme } from "@mantine/core";
export const useTextColor = () => {
  const theme = useMantineTheme();
  if (theme.colorScheme === "light") return theme.black;

  return theme.colors.dark[0];
};
