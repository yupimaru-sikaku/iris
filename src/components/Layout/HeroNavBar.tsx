import React from 'react';
import { headerLink } from 'src/utils/headerLink';
import Link from 'next/link';
import { BaseText } from 'src/components/Common/BaseText';
import { NextPage } from 'next';

type Props = {
  bright: 'light' | 'dark';
};

export const HeroNavBar: NextPage<Props> = ({ bright }) => {
  return (
    <ul
      className={`flex items-center justify-end gap-10 pr-10 opacity-40 ${
        bright === 'light' ? 'bg-gray-50' : 'bg-gray-200'
      }`}
    >
      {headerLink.map((content) => (
        <li key={content.label}>
          <Link href={content.link}>
            <a className="cursor-pointer">
              <BaseText content="middle" color="dark">
                {content.label}
              </BaseText>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
