import { useState } from 'react';

import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { Section } from '@/components/base';
import { PageContainer } from '@/components/base';
import MessageCard from '@/components/cards/MessageCard';
import ContactForm from '@/components/forms/ContactForm';
import Loader from '@/components/misc/Loader';

import { IUserSubmitForm } from '@/types';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const submitHandler = async (formData: IUserSubmitForm) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
        }),
      });

      const data = await response.json();

      if (data.message === 'success') {
        setMessage(data.message);
        setTimeout(() => {
          router.push('/');
        }, 3000);
      }

      setIsLoading(false);
    } catch (error) {
      setMessage('fail');
      setIsLoading(false);
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

      <PageContainer>
        <Section>
          <div className='layout'>
            <div className='mx-auto mb-8 w-full md:w-8/12'>
              <h2>Contact Me</h2>
              <p className='mt-2 mb-8 text-gray-600 dark:text-gray-200'>
                If you want to hire me, collaborate or give me any feedback or
                suggestions, get in touch.
              </p>

              {/* Contact Form */}
              {isLoading && <Loader />}
              {message && <MessageCard message={message} />}
              {!isLoading && !message && (
                <ContactForm onSubmit={submitHandler} />
              )}
            </div>
          </div>
        </Section>
      </PageContainer>
    </>
  );
}
