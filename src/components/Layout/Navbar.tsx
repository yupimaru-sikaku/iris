import { ActionIcon } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';
import Image from 'next/image';
import { useState } from 'react';
import { NavBarModal } from 'src/components/Layout/NavBarModal';

export const Navbar = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  if (isModal) {
    return (
      <div className="fixed top-0 z-50 h-screen w-screen bg-main-100">
        <NavBarModal setIsModal={setIsModal} />
      </div>
    );
  }

  return (
    <header className="flex h-16 items-center justify-between">
      <div className="ml-3 flex items-center">
        <Image
          src="/iris_logo.webp"
          priority={true}
          alt="iris_logo"
          width={45}
          height={45}
        />
        <div className="ml-3">
          <p className="text-xs">訪問看護ステーション</p>
          <p className="text-main-100 font-extrabold">Iris</p>
        </div>
      </div>
      <ActionIcon onClick={() => setIsModal(true)} className="mr-3">
        <IconMenu2 className="text-main-100" />
      </ActionIcon>
    </header>
  );
};
