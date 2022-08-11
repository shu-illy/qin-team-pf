import React from "react";
import { Header } from "components/organisms/Header";
import { TitleArea } from "components/organisms/TitleArea";
import { Footer } from "components/organisms/Footer";

const footerHeight = 65;

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>{children}</main>

      <Footer height={footerHeight} />
    </div>
  );
};
