import React from 'react';
import { Layout } from 'src/components/Layout/Layouts';
import { ServiceInfo } from 'src/components/Service/ServiceInfo';

const Service = () => {
  return (
    <Layout title="サービスのご案内 | 訪問看護ステーションIris">
      <ServiceInfo />
    </Layout>
  );
};

export default Service;
