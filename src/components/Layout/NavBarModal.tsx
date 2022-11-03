import React, { useEffect } from 'react';
import { headerLink } from 'src/utils/headerLink';
import { useRouter } from 'next/router';
export const NavBarModal = () => {
  const router = useRouter();

  return (
    <div className="p-6">
      <ul className="my-4 space-y-3">
        {headerLink.map((content) => (
          <li
            key={content.label}
            className="group flex cursor-pointer items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow"
            onClick={() => router.push(`${content.link}`)}
          >
            {<content.logo />}
            <span className="ml-3 flex-1 whitespace-nowrap">
              {content.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
