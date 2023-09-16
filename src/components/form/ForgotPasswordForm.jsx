import React, { useState } from 'react'
import EmailFieldStyled from './EmailFieldStyled'
import styled from '@emotion/styled';
import ButtonStyled from './ButtonStyled';
import { Box } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import FormHeadingStyled from './FormHeadingStyled';
import GoBackLinkStyled from './GoBackLinkStyled';
import { emailSchema } from '../../utils/utility';

const BrandLogo = styled(Box)`
  text-align: center;
  margin-bottom: 10px;
`;

const BrandLogoIcon = styled(LockOutlined)`
  font-size: 80px;
  color: rgba(0,0,0,0.6);
  line-height: 1;
`;

const ForgotPasswordForm = ({ heading, hideLogo }) => {

  const [registeredEmail, setRegisteredEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = async (value) => {
    let errorMessage = "";
    try {
      await emailSchema.validate(value);
    } catch (error) {
      errorMessage = error.message
    }
    setEmailError(errorMessage);
  };

  const handleOnEmailChange = (e) => {
    const { value } = e.target;
    const trimmedValue = value.replace(/\s/g, '');
    setRegisteredEmail(trimmedValue);
    validateEmail(trimmedValue);
  };

  const handleOnLoginSubmit = (e) => {
    e.preventDefault();

    console.log("Forgot Password", registeredEmail);

    return false;
  }

  const isValidEmail = !emailError && registeredEmail;

  return (
    <form
      autoComplete='off'
      onSubmit={handleOnLoginSubmit}
    >
      {heading && <FormHeadingStyled variant='h1'>{heading ?? "Forgot Password?"}</FormHeadingStyled>}
      {!hideLogo &&
        <BrandLogo>
          <BrandLogoIcon />
        </BrandLogo>
      }
      <EmailFieldStyled
        fullWidth
        required
        name="email"
        value={registeredEmail}
        label="Email"
        onChange={handleOnEmailChange}
        placeholder="Enter your registered email address"
        error={emailError}
        helperText={emailError}
      />

      <ButtonStyled
        type="submit"
        disabled={!isValidEmail}
      >
        Reset Password
      </ButtonStyled>

      <GoBackLinkStyled />

    </form>
  )
}

export default ForgotPasswordForm