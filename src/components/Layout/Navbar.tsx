import { ActionIcon, Modal } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';
import { BaseText } from 'src/components/Common/BaseText';
import { NavBarModal } from 'src/components/Layout/NavBarModal';

export const Navbar = () => {
  const largerThanSm = useMediaQuery('sm');
  const [opened, setOpened] = useState(false);

  return (
    <header className="flex h-16 animate-fade-in items-center justify-between border-b sm:justify-around">
      <Link href="/">
        <a className="ml-3 flex items-center">
          <Image
            src="/iris_logo.webp"
            priority={true}
            alt="iris_logo"
            width={45}
            height={45}
          />
          <div className="ml-3">
            <p className="text-xs">訪問看護ステーション</p>
            <p className="font-extrabold text-main-100">Iris</p>
          </div>
        </a>
      </Link>
      {largerThanSm ? (
        <div className="text-end text-sm">
          <p className="mb-2">【営業時間】平日15:00 〜 19:00</p>
          <span className="rounded-md bg-main-100 p-0.5 text-sm text-white ">
            お問い合わせ
          </span>
          <span className="ml-3 text-sm text-main-100">072-828-7776</span>
        </div>
      ) : (
        <ActionIcon onClick={() => setOpened(true)} className="mr-3">
          <IconMenu2 className="text-main-100" />
        </ActionIcon>
      )}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        fullScreen
        title="メニュー"
      >
        <NavBarModal />
      </Modal>
    </header>
  );
};
