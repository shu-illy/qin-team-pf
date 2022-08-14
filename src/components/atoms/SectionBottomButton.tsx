import { Button } from "lib/mantine";
import React from "react";
import { useIsDark } from "lib/mantine/useIsDark";

type Props = {
  label: string;
};

const SectionBottomButton: React.FC<Props> = ({ label }) => {
  const isDark = useIsDark();
  return (
    <Button color="dark" radius="xl" size="md" variant={isDark ? "white" : "filled"}>
      {label}
    </Button>
  );
};

export default SectionBottomButton;
