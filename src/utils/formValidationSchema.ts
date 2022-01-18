import * as yup from 'yup';

export const formValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[aA-zZ\s]+$/, 'Your name should only have characters'),
  email: yup
    .string()
    .email('Please add a valid email')
    .required('Email is required'),
  message: yup
    .string()
    .min(10, 'Your message should have at least 10 characters.')
    .max(200)
    .required('Message is required'),
});
