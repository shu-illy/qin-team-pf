import { useIsDark } from "lib/mantine/useIsDark";
import { useMantineTheme } from "@mantine/core";
export const useBackgroundColor = () => {
  const isDark = useIsDark();
  const theme = useMantineTheme();
  return isDark ? theme.colors.dark[7] : theme.white;
};
