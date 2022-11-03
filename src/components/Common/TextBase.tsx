import { DefaultMantineColor, MantineGradient, Text } from '@mantine/core';
import { NextPage } from 'next';
import { ReactNode, useState } from 'react';

type Props = {
  align?: 'start' | 'center' | 'end';
  children: ReactNode;
  color?: DefaultMantineColor | 'dimmed';
  gradient?: MantineGradient;
  lineClamp?: number;
  size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  span?: boolean;
  variant?: 'link' | 'text' | 'gradient';
  weight?: number;
  content: 'large' | 'middle' | 'small';
  lineHeight?: string;
  letterSpacing?: string;
};

export const TextBase: NextPage<Props> = ({
  align,
  children,
  color = 'gray',
  gradient,
  // ex）gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
  lineClamp,
  span,
  variant = 'text',
  weight = 400,
  content,
  lineHeight = '2',
  letterSpacing,
}) => {
  const fontSize =
    content === 'large'
      ? 'text-xl xs:text-3xl md:text-4xl'
      : content === 'middle'
      ? 'text-base xs:text-lg md:text-xl'
      : 'text-xs xs:text-sm md:text-base';
  return (
    <Text
      align={align}
      color={color}
      gradient={gradient}
      lineClamp={lineClamp}
      variant={variant}
      weight={weight}
      sx={{
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
        fontSize: fontSize,
      }}
    >
      {children}
    </Text>
  );
};
