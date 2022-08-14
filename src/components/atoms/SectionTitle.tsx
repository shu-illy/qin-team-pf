import { Divider, Text } from "@mantine/core";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const SectionTitle: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Text size={26} component="h2" mt={40} mb={0}>
        {children}
      </Text>
      <Divider my="lg" pb={4} />
    </>
  );
};
