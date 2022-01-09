import * as yup from 'yup'

export const formValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter your name')
    .matches(/^[aA-zZ\s]+$/, 'Your name should only have characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please add a valid email'),
  message: yup.string().required('Please type your message').min(10).max(200),
})
