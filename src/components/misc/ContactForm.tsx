import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formValidationSchema } from 'src/utils/formValidationSchema'
import { FiSend } from 'react-icons/fi'
import cn from 'classnames'

import { UserSubmitForm } from '@/types/types'
import useSubmit from 'src/hooks/useSubmit'
import Loader from './Loader'
import MessageCard from './MessageCard'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({ resolver: yupResolver(formValidationSchema) })
  const { isLoading, submitFormHandler, message } = useSubmit()

  const handler = (data: UserSubmitForm) =>
    submitFormHandler('api/contact', data, reset)

  return (
    <>
      {isLoading && <Loader />}
      {message && <MessageCard message={message} />}
      {!message && (
        <form className="w-full" onSubmit={handleSubmit(handler)}>
          {/* Name Input */}
          <div className="flex flex-wrap w-full mb-6">
            <input
              className={cn(
                'input mb-2',
                errors.name ? 'ring-2 ring-red-500' : ''
              )}
              type="text"
              placeholder="Your name..."
              {...register('name')}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                *{errors.name.message}
              </span>
            )}
          </div>

          {/* Email Input */}
          <div className="flex flex-wrap w-full mb-6">
            <input
              className={cn(
                'mb-2 input',
                errors.email ? 'ring-2 text-red-500' : ''
              )}
              type="email"
              placeholder="Your email..."
              {...register('email')}
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                *{errors.email.message}
              </span>
            )}
          </div>

          {/* Message Input */}
          <div className="flex flex-wrap w-full mb-6">
            <textarea
              className={cn(
                'h-48 mb-2 input ',
                errors.message ? 'ring-2 text-red-500' : ''
              )}
              placeholder="Your message..."
              {...register('message')}
            ></textarea>
            {errors.message && (
              <span className="text-xs text-red-500 capitalize">
                *{errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:w-1/3">
            <button className="flex items-center send-form-btn focus:shadow-outline">
              Send <FiSend className="ml-2" />
            </button>
          </div>
        </form>
      )}
    </>
  )
}
