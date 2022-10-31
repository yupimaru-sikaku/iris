import React from 'react';
import { Layout } from 'src/components/Layout/Layouts';
import { ContactForm } from 'src/components/Contact/ContactForm';
import { HeroNavBar } from 'src/components/Layout/HeroNavBar';
import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';
const Contact = () => {
  const largerThanSm = useMediaQuery('sm');
  return (
    <Layout title="お問い合わせ | 訪問看護ステーションIris">
      {largerThanSm && <HeroNavBar bright="dark" />}
      <ContactForm />
    </Layout>
  );
};

export default Contact;
