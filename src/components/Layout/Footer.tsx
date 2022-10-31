import { Divider } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';

export const Footer = () => {
  const largerThanSm = useMediaQuery('sm');

  if (largerThanSm) {
    return (
      <footer className="bg-main-100 opacity-80 shadow">
        <div className="p-vw-5" />

        <div className="flex justify-around">
          <div className="flex items-center justify-center">
            <Link href="/">
              <a className="flex items-center">
                <Image
                  src="/iris_logo.webp"
                  alt="logo"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
            <div className="ml-4 flex flex-col">
              <BaseText content="small" color="white">
                訪問看護ステーション
              </BaseText>
              <BaseText content="middle" color="white" weight={900}>
                Iris
              </BaseText>
            </div>
          </div>
          <div>
            <BaseText content="small" align="center" color="white">
              訪問看護ステーションIris
            </BaseText>
            <div className="p-vw-5" />
            <BaseText content="small" align="center" color="white">
              【営業時間】
            </BaseText>
            <BaseText content="small" align="center" color="white">
              平日15:00〜19:00
            </BaseText>
            <div className="p-vw-5" />
            <BaseText content="small" align="center" color="white">
              〒572-0077
            </BaseText>
            <BaseText content="small" align="center" color="white">
              大阪府寝屋川市点野3-30-4 2-A
            </BaseText>
            <div className="p-vw-5" />
            <BaseText content="small" align="center" color="white">
              TEL 072-828-7776
            </BaseText>
          </div>
        </div>
        <div className="p-vw-5" />
        <Divider />
        <BaseText content="small" align="center">
          © 2022 Iris Association™. All Rights Reserved.
        </BaseText>
      </footer>
    );
  }

  return (
    <footer className="bg-main-100 opacity-80 shadow">
      <div className="p-vw-10" />

      <div className="flex items-center justify-center">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/iris_logo.webp" alt="logo" width={50} height={50} />
          </a>
        </Link>
        <div className="ml-4 flex flex-col">
          <BaseText content="small" color="white">
            訪問看護ステーション
          </BaseText>
          <BaseText content="middle" color="white" weight={900}>
            Iris
          </BaseText>
        </div>
      </div>

      <div className="p-vw-10" />

      <Divider />

      <div className="p-vw-10" />

      <div>
        <BaseText content="small" align="center" color="white">
          訪問看護ステーションIris
        </BaseText>
        <div className="p-vw-10" />
        <BaseText content="small" align="center" color="white">
          【営業時間】
        </BaseText>
        <BaseText content="small" align="center" color="white">
          平日15:00〜19:00
        </BaseText>
        <div className="p-vw-10" />
        <BaseText content="small" align="center" color="white">
          〒572-0077
        </BaseText>
        <BaseText content="small" align="center" color="white">
          大阪府寝屋川市点野3-30-4 2-A
        </BaseText>
        <div className="p-vw-10" />
        <BaseText content="small" align="center" color="white">
          TEL 072-828-7776
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
