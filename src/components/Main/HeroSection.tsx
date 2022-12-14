import { BackgroundImage } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';
import { BaseText } from '../Common/BaseText';
import { HeroNavBar } from 'src/components/Layout/HeroNavBar';

export const HeroSection = () => {
  const largerThanSm = useMediaQuery('sm');
  return (
    <div className="animate-fade-in">
      <BackgroundImage src="/hero.png">
        {largerThanSm && <HeroNavBar bright="light" />}
        <div className="p-6 sm:px-40">
          <BaseText content="large" color="white" size={90}>
            Live in peace
          </BaseText>
          <div className="ml-10">
            <BaseText content="large" color="white" size={90}>
              Keep enjoy
            </BaseText>
          </div>

          <div className="p-vw-8" />

          <BaseText color="white" size={40}>
            心落ち着いた生活
          </BaseText>
          <div className="ml-10">
            <BaseText color="white" size={40}>
              そして、楽しみ続けよう
            </BaseText>
          </div>

          <div className="p-vw-10" />

          <BaseText color="white" size={32}>
            落ち着いた気持ちで生活ができるように。
            <br />
            そして、その先に楽しい日々を。
          </BaseText>
        </div>
      </BackgroundImage>
    </div>
  );
};
