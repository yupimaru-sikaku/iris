import { ActionIcon, Divider } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { BaseText } from '../Common/BaseText';
import { IconExternalLink } from '@tabler/icons';

export const AboutService = () => {
  return (
    <div className="animate-fade-in bg-gray-100 px-4 sm:px-40">
      <div className="p-vw-32" />

      <div>
        <div className="flex flex-col items-center">
          <BaseText content="large">訪問看護ステーションIrisの特徴</BaseText>
          <span className="mt-1 mb-5 w-1/6 rounded border-2 border-main-100" />
        </div>
        <BaseText color="gray" lineHeight={2}>
          障がい者のグループホームがメインの精神科専門の訪問看護チーム。
          当法人にて、障がい者のグループホームを運営してるからこそ、グループホームでの生活や日々の悩みなどを共に利用者さん目線で考えていくことができます。
          <br />
          <br />
          また利用者さんだけでなく、普段からご支援頂いているスタッフさんの悩みも含めてのトータル支援していくことを心がけています。
          <br />
          <br />
          さらに、医療的な介入が難しい障がい者グループホームにて、日常的な健康管理を行い、利用者さんの地域生活をサポートするために連携を行っています。
        </BaseText>
      </div>

      <div className="p-vw-24" />
    </div>
  );
};
