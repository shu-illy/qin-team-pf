import About from "components/organisms/About";
import { Layout } from "components/templates/Layout";
import { NextPage } from "next";
import React from "react";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default AboutPage;
