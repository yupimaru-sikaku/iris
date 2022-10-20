import React from 'react';
import { BaseText } from '../Common/BaseText';
import { IconClipboardHeart } from '@tabler/icons';
import { serviceInfoList } from 'src/utils/serviceInfoList';
import { ActionIcon, Divider } from '@mantine/core';
import Image from 'next/image';

export const ServiceInfo = () => {
  return (
    <main className="p-3">
      <div className="p-vw-8" />
      <div className="flex flex-col items-center">
        <BaseText content="large" color="dark">
          訪問看護でできること
        </BaseText>
        <span className="mt-1 mb-5 w-1/6 rounded border-2 border-main-100" />
      </div>
      <div className="p-vw-8" />
      {serviceInfoList.map((content) => (
        <div key={content.label}>
          <div className="flex items-center gap-2">
            <ActionIcon color="pink">
              <IconClipboardHeart />
            </ActionIcon>
            <BaseText content="large" color="dark">
              {content.label}
            </BaseText>
          </div>
          <Divider />
          <div className="p-vw-8" />
          <BaseText content="middle">{content.text}</BaseText>
          <div className="p-vw-20" />
        </div>
      ))}
      <div className="flex flex-col items-center">
        <BaseText content="large" color="dark">
          地域全体でのネットワーク
        </BaseText>
        <span className="mt-1 mb-5 w-1/6 rounded border-2 border-main-100" />
      </div>
      <BaseText content="middle">
        SakuLa訪問看護ステーションでは、医療機関やかかりつけ医、行政などの各機関と連携し、利用者さんがよりサポートを受けやすく自分らしい生活を送れるよう、地域のネットワークを作って生活を支援します。
      </BaseText>
      <Image src="/serviceInfo_1.png" width={400} height={300} alt="service" />
      <BaseText content="middle">
        病気や障害を持った子供さんや、子供から大人までの循環器疾患を持った方、ターミナル、難病や認知症の方など、ぜひお気軽にご相談ください。
      </BaseText>

      <div className="p-vw-20" />

      <div className="flex flex-col items-center">
        <BaseText content="large" color="dark">
          訪問エリア
        </BaseText>
        <span className="mt-1 mb-5 w-1/6 rounded border-2 border-main-100" />
      </div>
      <BaseText content="middle">
        大阪市「住吉区」「阿倍野区」「東住吉区」
        ※その他、大阪市を中心に、北から南までご相談に応じます。
      </BaseText>
      <Image src="/serviceInfo_2.png" width={400} height={400} alt="service" />
    </main>
  );
};
