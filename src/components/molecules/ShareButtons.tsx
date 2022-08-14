import { Group } from "@mantine/core";
import React from "react";
import { FaFacebook, FaRss, FaTwitter } from "react-icons/fa";

export const ShareButtons: React.FC = () => {
  return (
    <Group spacing={12}>
      <FaTwitter color="white" size={24} />
      <FaFacebook color="white" size={24} />
      <FaRss color="white" size={24} />
    </Group>
  );
};
