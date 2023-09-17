import React, { useState } from 'react'
import EmailFieldStyled from './EmailFieldStyled'
import PasswordFieldStyled from './PasswordFieldStyled'
import styled from '@emotion/styled';
import ButtonStyled from './ButtonStyled';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import TextFieldStyled from './TextFieldStyled';
import FormHeadingStyled from './FormHeadingStyled';
import * as yup from 'yup';
import { signupValidationSchema } from '../../utils/utility';
import { Link } from 'react-router-dom';

const AgreeText = styled(Box)`
  padding: 0 0 20px 0;
  color: rgba(0,0,0,0.6);
`;

const LoginText = styled(Box)`
  padding: 30px 0 20px 0;
  text-align: center;
  color: rgba(0,0,0,0.6);
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: rgba(0,0,0,0.8);
`;

const LinkSignupStyled = styled(LinkStyled)`
  margin-left: 5px;
`;

const ErrorStyled = styled('div')`
  color: #d32f2f;
  font-size: 12px;
`;

const initSignupData = {
  full_name: "",
  email: "",
  password: "",
  confirm_password: "",
  agree: false,
}

const initSignupError = {
  full_name: "",
  email: "",
  password: "",
  confirm_password: "",
  agree: "",
}

const SignupForm = ({ heading }) => {

  const [signupFormData, setSignupFormData] = useState(initSignupData);
  const [signupError, setSignupError] = useState(initSignupError);

  const validateField = async (name, value) => {
    try {
      await yup.reach(signupValidationSchema, name).validate(value);
      setSignupError((prev) => ({ ...prev, [name]: '' }));
      if (name === 'password') {
        setSignupFormData((prev) => ({
          ...prev,
          confirm_password: '',
        }));
      }
    } catch (error) {
      if (name === 'confirm_password' && value === signupFormData.password) {
        setSignupError((prev) => ({
          ...prev,
          [name]: '',
        }));
      } else {
        setSignupError((prev) => ({ ...prev, [name]: error.message }));
      }
    }
  };

  const handleOnLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form data', signupFormData);
    return false;
  }

  const handleOnFieldChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    const trimmedValue = name === 'full_name' ? value : value.replace(/\s/g, '');
    setSignupFormData({ ...signupFormData, [name]: trimmedValue })
    validateField(name, trimmedValue)
  }

  const handleOnCheckboxChange = (e) => {
    const { checked, name } = e.target;
    setSignupFormData({ ...signupFormData, [name]: checked })
    validateField(name, checked)
  }

  const isValidForm = Object.values(signupError).every((error) => !error) &&
    Object.values(signupFormData).every((value) => !!value)

  return (
    <form
      autoComplete='off'
      onSubmit={handleOnLoginSubmit}
    >
      {heading && <FormHeadingStyled variant='h1'>{heading}</FormHeadingStyled>}

      <TextFieldStyled
        fullWidth
        required
        label="Full Name"
        name="full_name"
        value={signupFormData.full_name}
        onChange={handleOnFieldChange}
        placeholder="Enter your full name"
        error={!!signupError.full_name}
        helperText={signupError.full_name}
      />
      <EmailFieldStyled
        fullWidth
        required
        label="Email"
        name="email"
        value={signupFormData.email}
        onChange={handleOnFieldChange}
        placeholder="Enter your email address"
        error={!!signupError.email}
        helperText={signupError.email}
      />
      <PasswordFieldStyled
        fullWidth
        required
        name="password"
        label="Password"
        value={signupFormData.password}
        onChange={handleOnFieldChange}
        placeholder="Enter password"
        error={!!signupError.password}
        helperText={signupError.password}
      />
      <PasswordFieldStyled
        fullWidth
        required
        name="confirm_password"
        label="Confirm Password"
        placeholder="Repeat Your password"
        value={signupFormData.confirm_password}
        onChange={handleOnFieldChange}
        error={!!signupError.confirm_password}
        helperText={signupError.confirm_password}
      />
      <AgreeText>
        <FormControlLabel
          control={
            <Checkbox
              name="agree"
              checked={signupFormData.agree}
              onChange={handleOnCheckboxChange}
            />
          }
          label={
            <>I agree all statements in
              <LinkSignupStyled href={"/terms-and-service"}>
                Terms and service
              </LinkSignupStyled>
            </>
          }
        />
        {signupError.agree && <ErrorStyled>{signupError.agree}</ErrorStyled>}
      </AgreeText>
      <ButtonStyled
        type="submit"
        disabled={!isValidForm}
      >
        Sign Up
      </ButtonStyled>

      <LoginText>
        Already have an account?
        <LinkSignupStyled to={"/login"}>
          Login
        </LinkSignupStyled>
      </LoginText>
    </form>
  )
}

export default SignupForm