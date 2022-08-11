import { useMantineTheme } from "@mantine/core";
import { useIsDark } from "lib/mantine/useIsDark";
export const useTextColor = () => {
  const isDark = useIsDark();
  const theme = useMantineTheme();
  return isDark ? theme.white : theme.colors.dark[7];
};
