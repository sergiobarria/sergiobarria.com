import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { FiSend } from 'react-icons/fi';
import Loader from '../ui/Loader';

const ContactForm = () => {
  const [showMsg, setShowMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (showMsg) {
      toast.success('Message Sent!');
    }
  }, [showMsg]);

  const onSubmitForm = async values => {
    setIsLoading(true);

    const config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const res = await axios(config);
      if (res.status === 200) {
        reset();
        setShowMsg(true);
        setIsLoading(false);
        setTimeout(() => {
          router.push('/');
        }, 2000);
      }
    } catch (err) {
      setIsLoading(false);
      toast.error('Something Went Wrong! Please try again later.');
    }
  };

  const styles = {
    input: `block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 border-none rounded appearance-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-main `,
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="w-full py-6 space-y-6 md:w-5/6"
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
      />
      <div>
        <input
          id="name"
          autoComplete="off"
          {...register('name', {
            required: true,
            pattern: /^[a-zA-Z ]*$/i,
            validate: true,
          })}
          placeholder="Your name..."
          className={`${styles.input} ${
            errors.name ? 'ring-2 ring-red-500' : ''
          }`}
        />
        {errors.name && (
          <span className="text-xs text-red-600">
            *Your name should only contain letters and spaces
          </span>
        )}
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
          placeholder="Your email..."
          className={`${styles.input} ${
            errors.email ? 'ring-2 ring-red-500' : ''
          }`}
        />
        {errors.email && (
          <span className="text-xs text-red-600">
            *Please enter a valid email
          </span>
        )}
      </div>
      <div>
        <textarea
          {...register('message', {
            required: true,
            minLength: 10,
            maxLength: 1000,
          })}
          id="message"
          rows="5"
          placeholder="Your message..."
          className={`${styles.input} ${
            errors.message ? 'ring-2 ring-red-500' : ''
          }`}
        />
        {errors.message && (
          <span className="text-xs text-red-600">
            *Please enter a valid message
          </span>
        )}
      </div>
      {isLoading ? (
        <Loader />
      ) : !isLoading ? (
        <button type="submit" className="btn btn-black">
          Send Email <FiSend className="ml-2" />
        </button>
      ) : null}
    </form>
  );
};

export default ContactForm;
