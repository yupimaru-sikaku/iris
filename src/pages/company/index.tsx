import React from 'react';
import { AboutCompany } from 'src/components/Company/AboutCompany';
import { HeroNavBar } from 'src/components/Layout/HeroNavBar';
import { Layout } from 'src/components/Layout/Layouts';
import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';

const Company = () => {
  const largerThanSm = useMediaQuery('sm');
  return (
    <Layout title="会社概要 | 訪問看護ステーションIris">
      {largerThanSm && <HeroNavBar bright="dark" />}

      <AboutCompany />
    </Layout>
  );
};

export default Company;
