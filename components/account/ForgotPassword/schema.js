import * as Yup from 'yup';

const schemas = [
  Yup.object({
    email: Yup.string()
      .email('Pleas enter a valid email')
      .required('Email is required'),
  }),
  Yup.object({
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  }),
];

export default schemas;
