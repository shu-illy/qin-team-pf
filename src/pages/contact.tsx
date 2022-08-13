import ContactForm from "components/organisms/ContactForm";
import { Layout } from "components/templates/Layout";
import { NextPage } from "next";
import React from "react";

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
