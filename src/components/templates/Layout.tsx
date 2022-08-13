import React from "react";
import { Header } from "components/organisms/Header";
import { TitleArea } from "components/organisms/TitleArea";
import { Footer } from "components/organisms/Footer";
import { Container, Space } from "@mantine/core";
import { useMediaQuery } from "lib/mantine";

const footerHeight = 65;

type Props = {
  children: React.ReactNode;
  showTitleArea?: boolean;
};

export const Layout: React.FC<Props> = ({ children, showTitleArea = false }) => {
  const isDesktop = useMediaQuery("sm");
  const paddingX = isDesktop ? 240 : 16;
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        {showTitleArea && (
          <>
            <TitleArea />
            <Space h={isDesktop ? 40 : 0} />
          </>
        )}

        <Container mx={0} px={paddingX} size={99999}>
          {children}
        </Container>
      </main>

      <Footer height={footerHeight} />
    </div>
  );
};
