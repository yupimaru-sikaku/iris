import { BackgroundImage } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { BaseText } from '../Common/BaseText';

export const HeroSection = () => {
  return (
    <div className="animate-slide-in-bottom">
      <BackgroundImage src="/hero.png">
        <div className="p-6">
          <BaseText content="large" color="white" size={32}>
            Live in peace
          </BaseText>
          <div className="ml-10">
            <BaseText content="large" color="white" size={32}>
              Keep enjoy
            </BaseText>
          </div>

          <div className="p-vw-8" />

          <BaseText content="middle" color="white">
            心落ち着いた生活
          </BaseText>
          <div className="ml-10">
            <BaseText content="middle" color="white">
              そして、楽しみ続けよう
            </BaseText>
          </div>

          <div className="p-vw-10" />

          <BaseText content="small" color="white">
            落ち着いた気持ちで生活ができるように。
            <br />
            そして、その先に楽しい日々を。
            <br />
            <br />
            そんな想いで私達は看護を提供しています。
          </BaseText>
        </div>
      </BackgroundImage>
    </div>
  );
};
