import React, { InputHTMLAttributes } from 'react';

import clsx from 'clsx';
import { useField } from 'formik';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export default function InputField(props: Props) {
  const { name, label, ...rest } = props;
  const [field, meta] = useField(name);

  return (
    <div className='relative w-full'>
      <input
        {...field}
        {...rest}
        className={clsx(
          'peer w-full border-0 py-4 px-3',
          'focus:border-0 focus:ring-1 focus:ring-primary',
          'placeholder-transparent focus:outline-none',
          'rounded-md bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200'
        )}
      />
      <label
        className={clsx(
          'peer-placeholder-shown:text-base',
          'transition-all peer-placeholder-shown:top-4',
          'peer-focus:top-1 peer-focus:text-gray-400',
          'peer-focus:text-xs',
          'absolute left-3 top-1 text-xs text-gray-400'
        )}
      >
        {label}
      </label>
      {meta.touched && meta.error && (
        <p className='text-xs text-red-500 dark:text-red-500'>*{meta.error}</p>
      )}
    </div>
  );
}
