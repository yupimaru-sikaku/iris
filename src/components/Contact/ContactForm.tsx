import React from 'react';
import { BaseText } from '../Common/BaseText';
import { IconPhoneCall } from '@tabler/icons';

export const ContactForm = () => {
  return (
    <main className="p-3">
      <div className="flex flex-col items-center">
        <BaseText content="large">お問い合わせ</BaseText>
        <span className="mt-1 mb-5 w-1/6 rounded border-2 border-main-100" />
      </div>
      <BaseText content="middle">
        訪問看護に関するご相談やご質問、その他お問い合わせなどについては、下記のお問い合わせフォームよりお問い合わせください。
      </BaseText>

      <div className="p-vw-12" />

      <div className="flex items-center gap-2">
        <IconPhoneCall />
        <BaseText content="large" color="cyan">
          電話でのお問い合わせ
        </BaseText>
      </div>

      <div className="ml-8 flex items-center gap-2">
        <a href="tel:">
          <BaseText content="middle" color="indigo">
            072-828-7776
          </BaseText>
        </a>
      </div>

      <div className="p-vw-16" />

    </main>
  );
};
