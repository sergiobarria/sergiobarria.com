import React from 'react';

import clsx from 'clsx';
import { Tooltip as TippyTooltip, TooltipProps } from 'react-tippy';

type TootipTextProps = {
  content?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  spanClassName?: string;
  withUnderline?: boolean;
} & TooltipProps &
  Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>;

export default function Tooltip({
  content,
  children,
  className,
  spanClassName,
  withUnderline = false,
  ...rest
}: TootipTextProps) {
  return (
    <TippyTooltip
      trigger='mouseenter'
      interactive
      html={
        <div
          className={clsx(
            className,
            'inline-block p-2 text-gray-600 bg-white rounded-md shadow-md',
            'dark:bg-gray-dark dark:text-gray-light',
            'border dark:border-gray-600'
          )}
        >
          {content}
        </div>
      }
      {...rest}
    >
      {withUnderline ? (
        <span
          className={clsx(spanClassName, 'underline')}
          style={{ textDecorationStyle: 'dotted' }}
        >
          {children}
        </span>
      ) : (
        <>{children}</>
      )}
    </TippyTooltip>
  );
}
