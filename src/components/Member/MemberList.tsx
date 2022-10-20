import Image from 'next/image';
import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';

export const MemberList = () => {
  return (
    <main className="p-6">
      <div className="flex flex-col items-center">
        <BaseText content="large" color="dark">
          代表挨拶
        </BaseText>
        <span className="mt-1 mb-5 w-1/6 rounded border-2 border-main-100" />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/member_1.png"
          width={200}
          height={200}
          alt="member"
          className="rounded-full"
        />

        <div className="p-vw-12" />

        <BaseText content="large" color="green" weight={900}>
          木村 将貴
        </BaseText>
        <BaseText content="middle">
          管理者 / 看護師 / リンパ浮腫セラピスト
        </BaseText>
        <BaseText content="middle">
          好きな音楽：ボンジョビ
          <br />
          好きな食べ物：カレー
          <br />
          好きな言葉：為せば成る
          <br />
        </BaseText>
      </div>

      <div className="p-vw-24" />

      <div className="flex flex-col items-center">
        <BaseText content="large" color="dark">
          副代表挨拶
        </BaseText>
        <span className="mt-1 mb-5 w-1/6 rounded border-2 border-main-100" />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/member_2.png"
          width={200}
          height={200}
          alt="member"
          className="rounded-full"
        />

        <div className="p-vw-12" />

        <BaseText content="large" color="indigo" weight={900}>
          松下 晃樹
        </BaseText>
        <BaseText content="middle">
          管理者 / 看護師 / リンパ浮腫セラピスト
        </BaseText>
        <BaseText content="middle">
          好きな音楽：BackNumber
          <br />
          好きな食べ物：一双
          <br />
          好きな言葉：東大医学部は頭が悪い！
          <br />
        </BaseText>
      </div>

      <div className="p-vw-24" />

      <div className="flex flex-col items-center">
        <BaseText content="large" color="dark">
          管理者挨拶
        </BaseText>
        <span className="mt-1 mb-5 w-1/6 rounded border-2 border-main-100" />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/member_3.png"
          width={200}
          height={200}
          alt="member"
          className="rounded-full"
        />

        <div className="p-vw-12" />

        <BaseText content="large" color="pink" weight={900}>
          西村 真依
        </BaseText>
        <BaseText content="middle">
          管理者 / 看護師 / リンパ浮腫セラピスト
        </BaseText>
        <BaseText content="middle">
          好きな音楽:スカイピース
          <br />
          好きな食べ物：さくらんぼ
          <br />
          好きな言葉：雷坊主の添い寝節
          <br />
        </BaseText>
      </div>
    </main>
  );
};
