import React, { useState } from 'react'
import PasswordFieldStyled from './PasswordFieldStyled'
import ButtonStyled from './ButtonStyled';
import GoBackLinkStyled from './GoBackLinkStyled';
import FormHeadingStyled from './FormHeadingStyled';

const ChangePasswordForm = ({ heading }) => {

  const [isValid, setIsValid] = useState(true);

  const handleOnLoginSubmit = (e) => {
    e.preventDefault();

    console.log("Login submit");

    return false;
  }

  return (
    <form
      autoComplete='off'
      onSubmit={handleOnLoginSubmit}
    >
      {heading && <FormHeadingStyled variant='h1'>{heading ?? "Forgot Password?"}</FormHeadingStyled>}

      <PasswordFieldStyled
        fullWidth
        required
        name='old_password'
        label="Old password"
        placeholder="Enter your old password"
        error={false}
      />

      <PasswordFieldStyled
        fullWidth
        name="new_password"
        required
        label="New password"
        placeholder="Enter new password"
        error={false}
      />

      <PasswordFieldStyled
        fullWidth
        required
        name='confirm_password'
        label="Confirm password"
        placeholder="Repeat your new password"
        error={false}
      />

      <ButtonStyled type="submit">
        Change Password
      </ButtonStyled>

      <GoBackLinkStyled />

    </form>
  )
}

export default ChangePasswordForm