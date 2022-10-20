import { Badge, Divider } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';
import { aboutUsContent } from 'src/utils/aboutUsContent';
import { BaseText } from 'src/components/Common/BaseText';

export const AboutCompany = () => {
  const largerThanSm = useMediaQuery('sm');

  return (
    <main className="p-3">
      <div className="flex flex-col items-center">
        <BaseText content="large">会社概要</BaseText>
        <span className="mt-1 mb-5 w-1/6 rounded border-2 border-main-100" />
      </div>
      {aboutUsContent.map((content) => (
        <div key={content.label} className="px-5">
          <div className="flex flex-col text-sm md:text-xl">
            <Badge
              sx={{ width: '30%' }}
              variant="light"
              color="green"
              size={`${largerThanSm ? 'xl' : 'md'}`}
            >
              {content.label}
            </Badge>
            <p className="mt-2">{content.text}</p>
          </div>
          <Divider />
          <div className="p-vw-12" />
        </div>
      ))}
    </main>
  );
};
