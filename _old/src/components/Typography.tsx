import * as React from 'react';

import clsx from 'clsx';

type TitleProps = {
  as?: React.ElementType;
  className?: string;
  id?: string;
} & { children: React.ReactNode };

const base = 'text-gray-900 dark:text-gray-200';

const fontSize = {
  h1: clsx(base, 'font-bold leading-tight text-4xl md:text-5xl'),
  h2: clsx(base, 'font-bold leading-tight text-3xl md:text-4xl mb-4'),
  h3: clsx(base, 'font-bold text-xl md:text-2xl mb-4'),
  h4: clsx(base, 'font-medium text-base'),
  h5: clsx(base, 'font-medium text-sm'),
  h6: clsx(base, 'font-medium text-xs'),
};

function Title({
  size,
  as,
  className,
  ...rest
}: TitleProps & { size: keyof typeof fontSize }) {
  const Tag = as ?? size;

  return <Tag className={clsx(fontSize[size], className)} {...rest} />;
}

function H1(props: TitleProps) {
  return <Title size='h1' {...props} />;
}

function H2(props: TitleProps) {
  return <Title size='h2' {...props} />;
}

function H3(props: TitleProps) {
  return <Title size='h3' {...props} />;
}

function H4(props: TitleProps) {
  return <Title size='h4' {...props} />;
}

function H5(props: TitleProps) {
  return <Title size='h5' {...props} />;
}

function H6(props: TitleProps) {
  return <Title size='h6' {...props} />;
}

type ParagraphProps = {
  className?: string;
  prose?: boolean;
  textColorClassName?: string;
  as?: React.ElementType;
} & { children: React.ReactNode };

function Paragraph({
  className,
  prose = false,
  as = 'p',
  textColorClassName = 'text-gray-600 dark:text-gray-200',
  ...rest
}: ParagraphProps) {
  return React.createElement(as, {
    className: clsx(
      textColorClassName,
      prose && 'prose max-w-none dark:prose-invert',
      className
    ),
    ...rest,
  });
}

export { H1, H2, H3, H4, H5, H6, Paragraph };
