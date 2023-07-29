import * as React from 'react';

import { Form, useFormikContext } from 'formik';
import { FiSend } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import InputField from '@/components/forms/InputField';
import TextareaField from '@/components/forms/TextareaField';

export default function ContactForm() {
  const { isSubmitting } = useFormikContext();

  return (
    <Form className='space-y-4'>
      <InputField name='name' label='Name' placeholder='Name' />
      <InputField name='email' label='Email' placeholder='Email' />
      <TextareaField name='message' label='Message' placeholder='Message' />
      <Button isLoading={isSubmitting} disabled={isSubmitting ? true : false}>
        {!isSubmitting && <FiSend className='mr-3' />}
        {!isSubmitting ? 'Send' : 'Sending...'}
      </Button>
    </Form>
  );
}
