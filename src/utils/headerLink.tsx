import { headerLinkType } from 'src/types';
import { IconNews } from '@tabler/icons';
import { IconHome2 } from '@tabler/icons';
import { IconAccessible } from '@tabler/icons';
import { IconBuildingCommunity } from '@tabler/icons';
import { IconFriends } from '@tabler/icons';
import { IconMessageCircle2 } from '@tabler/icons';

export const headerLink: headerLinkType[] = [
  {
    link: '/',
    label: 'ホーム',
    logo: IconHome2,
  },
  // {
  //   link: '/service',
  //   label: 'サービス案内',
  //   logo: IconAccessible,
  // },
  {
    link: '/company',
    label: '会社案内',
    logo: IconBuildingCommunity,
  },
  // {
  //   link: '/member',
  //   label: 'メンバー',
  //   logo: IconFriends,
  // },
  {
    link: '/contact',
    label: 'お問い合わせ',
    logo: IconMessageCircle2,
  },
];
