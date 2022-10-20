import React from 'react';
import { Layout } from 'src/components/Layout/Layouts';
import { MemberList } from 'src/components/Member/MemberList';

const Member = () => {
  return (
    <Layout title="メンバー紹介 | 訪問看護ステーションIris">
      <MemberList />
    </Layout>
  );
};

export default Member;
