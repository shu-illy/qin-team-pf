import { SectionTitle } from "components/atoms/SectionTitle";
import React from "react";

type Props = {
  isAll: boolean;
};

export const Portfolio: React.FC<Props> = ({ isAll }) => {
  return (
    <>
      <SectionTitle>Portfolio</SectionTitle>
    </>
  );
};
