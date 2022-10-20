import Image from 'next/image';
import React from 'react';
import { BaseText } from '../Common/BaseText';

export const HeroSection = () => {
  return (
    <div>
      <Image
        src="/hero.png"
        layout="responsive"
        priority={true}
        alt="hero"
        width={100}
        height={120}
        className="relative flex h-screen items-start justify-between"
      />

      <div className="absolute top-1/2 -translate-y-1/3 transform p-6 text-3xl font-bold leading-loose tracking-widest text-white sm:text-4xl">
        <BaseText content="large" color="white" size={32}>
          Live like you
        </BaseText>
        <BaseText content="middle" color="white">
          療養生活をあなたらしく
        </BaseText>

        <div className="p-vw-10" />

        <BaseText content="small" color="white">
          「あなたらしく生きる為に」療養生活が送れるように
          医療機関やかかりつけ医師・行政などと連携し
          地域のネットワークを作って生活を支援し
          安心安全で良質な看護を提供します。
        </BaseText>
      </div>
    </div>
  );
};
