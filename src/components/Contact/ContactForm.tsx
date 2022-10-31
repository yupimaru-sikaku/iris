import React, { useEffect, useState } from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { IconPhoneCall } from '@tabler/icons';
import { IconMailForward } from '@tabler/icons';
import { useForm } from '@mantine/form';
import { FormTextInput } from 'src/components/Common/FormTextInput';
import { FormTextArea } from 'src/components/Common/FormTextArea';
import { ActionIcon, Button, CheckIcon } from '@mantine/core';
import { Contact } from 'src/types';
import { useRouter } from 'next/router';
import { showNotification } from '@mantine/notifications';

export const ContactForm = () => {
  const [isLoader, setIsLoader] = useState(false);
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? '';

  const form = useForm({
    initialValues: {
      name: '',
      furigana: '',
      email: '',
      phoneNumber: '',
      content: '',
    },
    validate: {
      name: (value) => (value.length < 1 ? 'お名前を入力してください' : null),
      furigana: (value) =>
        value.length < 1 ? 'ふりがなを入力してください' : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'メールアドレスが不正です',
      content: (value) =>
        value.length < 1 ? 'お問い合わせ内容を入力してください' : null,
    },
  });

  const handleSubmit = async (contact: Contact): Promise<void> => {
    setIsLoader(true);
    await fetch(baseUrl + '/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });

    router.push('/');
    showNotification({
      title: '送信されました',
      message: '担当からご連絡があるまでお待ち下さい',
      autoClose: false,
      icon: (
        <ActionIcon size="xs" color="cyan">
          <CheckIcon color="white" />
        </ActionIcon>
      ),
    });

    setIsLoader(false);
  };

  return (
    <main className="animate-fade-in p-6 sm:px-40 md:px-60 lg:px-80">
      <div className="flex flex-col items-center">
        <BaseText content="large">お問い合わせ</BaseText>
        <span className="mt-1 mb-5 w-1/6 rounded border-2 border-main-100" />
      </div>
      <BaseText content="middle">
        訪問看護に関するご相談やご質問、その他お問い合わせなどについては、下記のお問い合わせフォームよりお問い合わせください。
      </BaseText>

      <div className="p-vw-12" />

      <div className="flex items-center gap-2">
        <IconPhoneCall />
        <BaseText content="large" color="cyan">
          電話でのお問い合わせ
        </BaseText>
      </div>

      <div className="ml-8 flex items-center gap-2">
        <a href="tel:">
          <BaseText content="middle" color="indigo">
            072-828-7776
          </BaseText>
        </a>
      </div>

      <div className="p-vw-16" />

      <div className="flex items-center gap-2">
        <IconMailForward />
        <BaseText content="large" color="cyan">
          お問い合わせフォーム
        </BaseText>
      </div>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div>
          <FormTextInput
            idText="name"
            label="お名前"
            description="例）福祉 太郎"
            required={true}
            form={form}
            formValue="name"
          />
          <div className="p-vw-12" />
          <FormTextInput
            idText="furigana"
            label="ふりがな"
            description="例）ふくし たろう"
            required={true}
            form={form}
            formValue="furigana"
          />
          <div className="p-vw-12" />
          <FormTextInput
            idText="email"
            label="メールアドレス"
            description="例）fukushi@gmail.com"
            required={true}
            form={form}
            formValue="email"
          />
          <div className="p-vw-12" />
          <FormTextInput
            idText="phoneNumber"
            label="電話番号"
            description="ハイフン無し 例）09011112222"
            required={false}
            form={form}
            formValue="phoneNumber"
          />
          <div className="p-vw-12" />
          <FormTextArea
            idText="content"
            label="お問い合わせ内容"
            autosize={true}
            minRows={5}
            required={true}
            form={form}
            formValue="content"
            variant="filled"
          />
        </div>
        <div className="p-vw-24" />
        <div className="text-center">
          <Button
            className="w-32"
            type="submit"
            disabled={
              form.values.name == '' ||
              form.values.furigana == '' ||
              form.values.email == '' ||
              form.values.content == '' ||
              isLoader
            }
            loading={isLoader}
          >
            送信する
          </Button>
        </div>
      </form>

      <div className="p-vw-8" />

      <div className="p-vw-16" />
    </main>
  );
};
