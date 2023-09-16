import React, { useState } from 'react'
import PasswordFieldStyled from './PasswordFieldStyled'
import ButtonStyled from './ButtonStyled';
import GoBackLinkStyled from './GoBackLinkStyled';
import FormHeadingStyled from './FormHeadingStyled';
import { changePasswordValidationSchema } from '../../utils/utility';
import * as yup from 'yup';

const initSignupData = {
  old_password: "",
  new_password: "",
  confirm_password: "",
}

const initChangePasswordError = {
  old_password: "",
  new_password: "",
  confirm_password: "",
}

const ChangePasswordForm = ({ heading }) => {

  const [changePasswordData, setChangePasswordData] = useState(initSignupData);
  const [changePasswordError, setChangePasswordError] = useState(initChangePasswordError);

  const validateField = async (name, value) => {
    try {
      await yup.reach(changePasswordValidationSchema, name).validate(value);
      setChangePasswordError((prev) => ({ ...prev, [name]: '' }));
      if (name === 'new_password') {
        setChangePasswordData((prev) => ({
          ...prev,
          confirm_password: '',
        }));
      }
    } catch (error) {
      if (name === 'confirm_password' && value === changePasswordData.new_password) {
        setChangePasswordError((prev) => ({
          ...prev,
          [name]: '',
        }));
      } else {
        setChangePasswordError((prev) => ({ ...prev, [name]: error.message }));
      }
    }
  };

  const handleOnLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Change password form data', changePasswordData);
    return false;
  }

  const handleOnFieldChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    const trimmedValue = name === 'full_name' ? value : value.replace(/\s/g, '');
    setChangePasswordData({ ...changePasswordData, [name]: trimmedValue })
    validateField(name, trimmedValue)
  }

  const isValidForm = Object.values(changePasswordError).every((error) => !error) &&
    Object.values(changePasswordData).every((value) => !!value)

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
        value={changePasswordData.old_password}
        onChange={handleOnFieldChange}
        placeholder="Enter your old password"
        error={!!changePasswordError.old_password}
        helperText={changePasswordError.old_password}
      />

      <PasswordFieldStyled
        fullWidth
        name="new_password"
        required
        label="New password"
        value={changePasswordData.new_password}
        onChange={handleOnFieldChange}
        placeholder="Enter new password"
        error={!!changePasswordError.new_password}
        helperText={changePasswordError.new_password}
      />

      <PasswordFieldStyled
        fullWidth
        required
        name='confirm_password'
        label="Confirm password"
        value={changePasswordData.confirm_password}
        onChange={handleOnFieldChange}
        placeholder="Repeat your new password"
        error={!!changePasswordError.confirm_password}
        helperText={changePasswordError.confirm_password}
      />

      <ButtonStyled
        type="submit"
        disabled={!isValidForm}
      >
        Change Password
      </ButtonStyled>

      <GoBackLinkStyled />

    </form>
  )
}

export default ChangePasswordForm