import * as yup from 'yup';

// Regex Patterns
export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,4}$/;
export const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&!*_+])[A-Za-z\d@#$%^&!*_+]+$/;

// Validation Schema
export const emailSchema = yup.string().required('Email is required').matches(emailRegex, 'Invalid email format');
export const passwordSchema = yup.string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters')
  .matches(passwordRegex,
    'Password must include at least one capital letter, one number, and one special character'
  );
export const loginValidationSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});
export const signupValidationSchema = yup.object().shape({
  full_name: yup.string().required('Full name is required'),
  email: emailSchema,
  password: passwordSchema,
  confirm_password: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match'),
  agree: yup.boolean().oneOf([true], 'You must agree to the Terms and service'),
});