import React, { FC } from "react";
import { Header } from "components/organisms/Header";
import { TitleArea } from "components/organisms/TitleArea";
import { Footer } from "components/organisms/Footer";
import { AppShell, Container, Space } from "@mantine/core";
import { useMediaQuery } from "lib/mantine";

const footerHeight = 65;

type Props = {
  children: React.ReactNode;
  showTitleArea?: boolean;
};

export const Layout: FC<Props> = ({ children, showTitleArea = false }) => {
  const isDesktop = useMediaQuery("sm");
  const paddingX = isDesktop ? 240 : 16;
  return (
    <>
      <AppShell padding={0} header={<Header />} footer={<Footer height={footerHeight} />}>
        {showTitleArea && (
          <>
            <TitleArea />
            <Space h={isDesktop ? 40 : 0} />
          </>
        )}
        <Container mx={0} px={paddingX} size={99999}>
          {children}
        </Container>
      </AppShell>
    </>
  );
};
