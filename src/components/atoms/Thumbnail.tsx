import { AspectRatio, Image as MantineImage } from "@mantine/core";
import NextImage from "next/image";
import React, { FC } from "react";

type Props = {
  url: string;
  aspectHeight: number;
  aspectWidth: number;
};

const Thumbnail: FC<Props> = ({ url, aspectHeight, aspectWidth }) => {
  return (
    <AspectRatio ratio={aspectWidth / aspectHeight}>
      <NextImage src={url} width="100%" layout="fill" objectFit="cover" alt="" />
    </AspectRatio>
  );
};

export default Thumbnail;
