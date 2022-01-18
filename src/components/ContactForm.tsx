import * as React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';

import { formValidationSchema } from '@/utils/formValidationSchema';

import { IUserSubmitForm } from '@/types/interfaces';

interface IProps {
  onSubmit: (formData: IUserSubmitForm) => void;
}

export default function ContactForm({ onSubmit }: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserSubmitForm>({ resolver: yupResolver(formValidationSchema) });

  return (
    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
      {/* Name Input */}
      <div className='flex flex-wrap w-full mb-6'>
        <input
          className={clsx(
            'input mb-2',
            errors.name ? 'ring-2 ring-red-500' : ''
          )}
          type='text'
          placeholder='Your name...'
          {...register('name')}
        />
        {errors.name && (
          <span className='text-xs text-red-500'>*{errors.name.message}</span>
        )}
      </div>

      {/* Email Input */}
      <div className='flex flex-wrap w-full mb-6'>
        <input
          className={clsx(
            'mb-2 input',
            errors.email ? 'ring-2 text-red-500' : ''
          )}
          type='email'
          placeholder='Your email...'
          {...register('email')}
        />
        {errors.email && (
          <span className='text-xs text-red-500'>*{errors.email.message}</span>
        )}
      </div>

      {/* Message Input */}
      <div className='flex flex-wrap w-full mb-6'>
        <textarea
          className={clsx(
            'h-48 mb-2 input ',
            errors.message ? 'ring-2 text-red-500' : ''
          )}
          placeholder='Your message...'
          {...register('message')}
        ></textarea>
        {errors.message && (
          <span className='text-xs text-red-500 capitalize'>
            *{errors.message.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <div className='md:w-1/3'>
        <button
          // disabled={message ? true : false}
          className={clsx(
            'flex items-center send-form-btn focus:shadow-outline'
            // message && 'cursor-not-allowed bg-gray-regular'
          )}
        >
          Send <FiSend className='ml-2' />
        </button>
      </div>
    </form>
  );
}
