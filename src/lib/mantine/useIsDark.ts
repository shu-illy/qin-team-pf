import { useMantineTheme } from "@mantine/core";
export const useIsDark = () => {
  const theme = useMantineTheme();
  return theme.colorScheme === "dark";
};
