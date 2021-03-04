import * as Yup from 'yup';

const schemas = [
  Yup.object({
    email: Yup.string()
      .email('Pleas enter a valid email')
      .required('Email is required'),
  }),
  Yup.object({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Firstname is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password is too short - should be 6 chars minimum'),
  }),
];

export default schemas;
