import * as React from 'react';

import { Form, Formik } from 'formik';
import { FiSend } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import InputField from '@/components/forms/InputField';
import TextareaField from '@/components/forms/TextareaField';

import { formValidationSchema } from '@/utils/formValidationSchema';

import { IUserSubmitForm } from '@/types/interfaces';

interface Props {
  onSubmit: (formData: IUserSubmitForm) => void;
}

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm({ onSubmit }: Props) {
  const initialValues: FormInputs = {
    name: '',
    email: '',
    message: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={formValidationSchema}
    >
      <Form className='space-y-4'>
        <InputField name='name' label='Name' placeholder='Name' />
        <InputField name='email' label='Email' placeholder='Email' />
        <TextareaField name='message' label='Message' placeholder='Message' />
        <Button>
          <FiSend className='mr-3' />
          Send
        </Button>
      </Form>
    </Formik>
  );
}
