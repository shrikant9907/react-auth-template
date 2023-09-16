import React, { useState } from 'react'
import EmailFieldStyled from './EmailFieldStyled'
import PasswordFieldStyled from './PasswordFieldStyled'
import styled from '@emotion/styled';
import ButtonStyled from './ButtonStyled';
import { Box } from '@mui/material';
import { AccountCircleOutlined } from '@mui/icons-material';
import FormHeadingStyled from './FormHeadingStyled';
import { loginValidationSchema } from '../../utils/utility';
import * as yup from 'yup';

const BrandLogo = styled(Box)`
  text-align: center;
  margin-bottom: 10px;
`;

const BrandLogoIcon = styled(AccountCircleOutlined)`
  font-size: 80px;
  color: rgba(0,0,0,0.6);
  line-height: 1;
`;

const ForgotPasswordBox = styled(Box)`
  margin-bottom: 22px;
  text-align: right;
`;

const SignupText = styled(Box)`
  padding: 30px 0 20px 0;
  text-align: center;
  color: rgba(0,0,0,0.6);
`;

const LinkStyled = styled('a')`
  text-decoration: none;
  font-size: 14px;
  color: rgba(0,0,0,0.8);
`;

const LinkSignupStyled = styled(LinkStyled)`
  margin-left: 5px;
`;

const initLoginData = {
  email: "",
  password: "",
}

const initLoginError = {
  email: "",
  password: "",
}

const LoginForm = ({ heading, hideLogo }) => {

  const [loginFormData, setLoginFormData] = useState(initLoginData);
  const [loginError, setLoginError] = useState(initLoginError);

  const validateField = async (name, value) => {
    try {
      await yup.reach(loginValidationSchema, name).validate(value);
      setLoginError((prev) => ({ ...prev, [name]: '' }));
    } catch (error) {
      setLoginError((prev) => ({ ...prev, [name]: error.message }));
    }
  };

  const handleOnLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login form data', loginFormData);
    return false;
  }

  const handleOnFieldChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    const trimmedValue = value.replace(/\s/g, '');
    setLoginFormData({ ...loginFormData, [name]: trimmedValue })
    validateField(name, trimmedValue)
  }

  const isValidForm = Object.values(loginError).every((error) => !error) &&
    Object.values(loginFormData).every((value) => !!value)

  return (
    <form
      autoComplete='off'
      onSubmit={handleOnLoginSubmit}
    >
      {heading && <FormHeadingStyled variant='h1'>{heading}</FormHeadingStyled>}
      {!hideLogo &&
        <BrandLogo>
          <BrandLogoIcon />
        </BrandLogo>
      }
      <EmailFieldStyled
        fullWidth
        required
        name='email'
        label="Email"
        value={loginFormData.email}
        onChange={handleOnFieldChange}
        placeholder="Enter your email address"
        error={!!loginError.email}
        helperText={loginError.email}
      />
      <PasswordFieldStyled
        fullWidth
        required
        name="password"
        label="Password"
        value={loginFormData.password}
        onChange={handleOnFieldChange}
        placeholder="Enter password"
        error={!!loginError.password}
        helperText={loginError.password}
      />
      <ForgotPasswordBox>
        <LinkStyled href={"/forgot-password"}>
          Forgot password?
        </LinkStyled>
      </ForgotPasswordBox>
      <ButtonStyled
        type="submit"
        disabled={!isValidForm}
      >
        Login
      </ButtonStyled>

      <SignupText>
        Don't have an account?
        <LinkSignupStyled href={"/sign-up"}>
          Sign Up
        </LinkSignupStyled>
      </SignupText>
    </form>
  )
}

export default LoginForm