import { Badge, Divider } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';
import aboutUsContent from 'src/utils/aboutUsContent.json';
import { BaseText } from 'src/components/Common/BaseText';
import { DataTable } from 'mantine-datatable';

export const AboutCompany = () => {
  const largerThanSm = useMediaQuery('sm');

  return (
    <main className="animate-fade-in p-6 px-3 sm:px-40 md:px-60 lg:px-80">
      <div className="flex flex-col items-center">
        <BaseText content="large">会社概要</BaseText>
        <span className="mt-1 mb-5 w-1/6 rounded border-2 border-main-100" />
      </div>

      <div className="p-vw-4" />

      <DataTable
        striped
        withBorder
        withColumnBorders
        verticalSpacing="lg"
        columns={[
          { accessor: 'label', title: '名称', width: '40%' },
          { accessor: 'text', title: '訪問看護ステーションIris' },
        ]}
        records={aboutUsContent}
      ></DataTable>
      <div className="p-vw-12" />
    </main>
  );
};
