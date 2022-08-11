import { SectionTitle } from "components/atoms/SectionTitle";
import React from "react";

type Props = {
  isAll: boolean;
};

export const Blog: React.FC<Props> = ({ isAll }) => {
  return (
    <>
      <SectionTitle>Blog</SectionTitle>
    </>
  );
};
