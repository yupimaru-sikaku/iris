import { Divider } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';

export const Footer = () => {
  return (
    <footer className="bg-main-100 opacity-80 shadow md:px-6 md:py-8">
      <div className="p-vw-10" />

      <div className="flex items-center justify-center">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/iris_logo.webp" alt="logo" width={50} height={50} />
          </a>
        </Link>
        <div className="ml-4 flex flex-col">
          <BaseText content="middle" color="white" weight={900}>
            Iris
          </BaseText>
          <BaseText content="small" color="white">
            訪問看護ステーション
          </BaseText>
        </div>
      </div>

      <div className="p-vw-10" />

      <Divider />

      <div className="p-vw-10" />

      <div>
        <BaseText content="small" align="center" color="white">
          Iris訪問看護ステーション
        </BaseText>
        <div className="p-vw-10" />
        <BaseText content="small" align="center" color="white">
          【営業時間】
        </BaseText>
        <BaseText content="small" align="center" color="white">
          平日 9:00〜18:00 （休日：土日祝 ※応相談）
        </BaseText>
        <div className="p-vw-10" />
        <BaseText content="small" align="center" color="white">
          〒558-0003
        </BaseText>
        <BaseText content="small" align="center" color="white">
          大阪府大阪市住吉区長居2-6-20 オムズコート105号
        </BaseText>
        <div className="p-vw-10" />
        <BaseText content="small" align="center" color="white">
          TEL 06-6696-8051
        </BaseText>
      </div>

      <div className="p-vw-10" />

      <BaseText content="small" align="center">
        © 2022 Iris Association™ <br />. All Rights Reserved.
      </BaseText>

      <div className="p-vw-10" />
    </footer>
  );
};
