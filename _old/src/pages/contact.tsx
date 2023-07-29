import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import axios from 'axios';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

import { Section } from '@/components/base';
import { Main } from '@/components/base';
import ContactForm from '@/components/forms/ContactForm';
import { H2, Paragraph } from '@/components/Typography';

import { formValidationSchema } from '@/utils/formValidationSchema';

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const router = useRouter();

  const initialValues: FormInputs = {
    name: '',
    email: '',
    message: '',
  };

  const submitHandler = async (formData: FormInputs) => {
    try {
      const response = await axios.post('/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { data } = response;

      if (data.message === 'success') {
        toast.success(
          "Message sent! Thanks for reaching out. I'll get back to you as soon as possible."
        );
        setTimeout(() => {
          router.push('/');
        }, 3000);
      }
    } catch (error) {
      toast.error(
        'Something went wrong sending your message. Please try again later'
      );
    }
  };

  const customMetadata = {
    title: 'Contact',
    canonical: 'https://sergiobarria.com/contact',
    openGraph: {
      url: 'https://sergiobarria.com/contact',
    },
  };

  return (
    <>
      <NextSeo {...customMetadata} />

      <Main>
        <Section>
          <div className='mx-auto mb-8 w-full md:w-8/12'>
            <H2>Contact Me</H2>
            <Paragraph className='mt-2 mb-8'>
              If you want to hire me, collaborate or give me any feedback or
              suggestions, get in touch.
            </Paragraph>

            {/* Contact Form */}
            <Formik
              initialValues={initialValues}
              onSubmit={submitHandler}
              validationSchema={formValidationSchema}
            >
              <ContactForm />
            </Formik>
          </div>
        </Section>
      </Main>
    </>
  );
}
