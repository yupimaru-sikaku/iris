import React from 'react';
import { Layout } from 'src/components/Layout/Layouts';
import {ContactForm} from "src/components/Contact/ContactForm"
const Contact = () => {
  return (
    <Layout title='お問い合わせ | 訪問看護ステーションIris'>
      <ContactForm/>
    </Layout>
  )
};

export default Contact;
