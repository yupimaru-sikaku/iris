import React from 'react';
import { AboutCompany } from 'src/components/Company/AboutCompany';
import { Layout } from 'src/components/Layout/Layouts';

const Company = () => {
  return (
    <Layout title="会社概要 | 訪問看護ステーションIris">
      <AboutCompany />
    </Layout>
  );
};

export default Company;
