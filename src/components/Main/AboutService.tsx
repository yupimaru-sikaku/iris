import { ActionIcon, Divider } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { BaseText } from '../Common/BaseText';
import { IconExternalLink } from '@tabler/icons';

export const AboutService = () => {
  return (
    <div className="animate-slide-in-bottom bg-gray-100 px-4">
      <div className="p-vw-32" />

      <div>
        <div className="flex flex-col items-center">
          <BaseText content="large">訪問看護とは</BaseText>
          <span className="mt-1 mb-5 w-1/6 rounded border-2 border-main-100" />
        </div>
        <BaseText content="middle">
          病気や障害を持った人が、住みなれた地域や家庭であなたらしく過ごせるよう生活の場へ訪問し、看護ケアを提供して療養生活を支援するサービスです。
        </BaseText>
      </div>

      <div className="p-vw-28" />
      <Divider color="cyan" label="Iris" labelPosition="right" />
      <div className="p-vw-28" />

      <div>
        <div className="flex flex-col items-center">
          <BaseText content="large">こんなケアをご提供します</BaseText>
          <span className="mt-1 mb-5  w-1/6 rounded border-2 border-main-100" />
        </div>
        <BaseText content="middle">
          脈拍や血圧、呼吸などの測定や、入浴や食事の援助、床ずれの処置や創傷処置など、在宅での生活や健康状態を支援し、良質な看護をめざしています。また、自費サービスやプライベート看護も相談いたします。
        </BaseText>
      </div>

      <div className="p-vw-28" />
      <Divider color="cyan" label="Iris" labelPosition="left" />
      <div className="p-vw-28" />

      <div>
        <div className="flex flex-col items-center">
          <BaseText content="large">連携機関</BaseText>
          <span className="mt-1 mb-5 w-1/6 rounded border-2 border-main-100" />
        </div>
        <Link href="/">
          <a className="flex items-center gap-2">
            <BaseText content="middle">■ 山田医院</BaseText>
            <ActionIcon size="sm">
              <IconExternalLink />
            </ActionIcon>
          </a>
        </Link>
        <BaseText content="small">
          〒545-0023 大阪府大阪市阿倍野区王子町2-12-14
        </BaseText>

        <div className="p-vw-10" />

        <Link href="/">
          <a className="flex items-center gap-2">
            <BaseText content="middle">■ ホワイトネットケアセンター</BaseText>
            <ActionIcon size="sm">
              <IconExternalLink />
            </ActionIcon>
          </a>
        </Link>
        <BaseText content="small">
          〒558-0042 大阪市住吉区東粉浜2-12-11
        </BaseText>
      </div>
      <div className="p-vw-32" />
    </div>
  );
};
