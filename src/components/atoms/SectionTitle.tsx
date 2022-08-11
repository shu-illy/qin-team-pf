import { Text } from "@mantine/core";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const SectionTitle: React.FC<Props> = ({ children }) => {
  return (
    <Text size={26} component="h2">
      {children}
    </Text>
  );
};
