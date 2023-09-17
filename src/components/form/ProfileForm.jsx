import React, { useState } from 'react'
import ButtonStyled from './ButtonStyled';
import FormHeadingStyled from './FormHeadingStyled';
import EmailFieldStyled from './EmailFieldStyled';
import { profileValidationSchema } from '../../utils/utility';
import TextFieldStyled from './TextFieldStyled';
import { Grid } from '@mui/material';
import * as yup from 'yup';

const initProfileData = {
  full_name: "",
  email: "",
  website: "",
  gender: "",
  dob: "",
  about: "",
}

const initProfileError = {
  full_name: "",
  phone: "",
  email: "",
  website: "",
  gender: "",
  dob: "",
  about: "",
}

const ProfileForm = ({ heading }) => {

  const [profileFormData, setProfileFormData] = useState(initProfileData);
  const [profileError, setProfileError] = useState(initProfileError);

  const validateField = async (name, value) => {
    try {
      await yup.reach(profileValidationSchema, name).validate(value);
      setProfileError((prev) => ({ ...prev, [name]: '' }));
    } catch (error) {
      setProfileError((prev) => ({ ...prev, [name]: error.message }));
    }
  };

  const handleOnProfileSubmit = (e) => {
    e.preventDefault();
    console.log('Profile form data', profileFormData);

    return false;
  }

  const handleOnFieldChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setProfileFormData({ ...profileFormData, [name]: value })
    validateField(name, value)
  }

  const isValidForm = Object.values(profileError).every((error) => !error) && profileFormData.full_name && profileFormData.email;

  return (
    <>
      <form
        autoComplete='off'
        onSubmit={handleOnProfileSubmit}
      >
        {heading && <FormHeadingStyled variant='h1'>{heading}</FormHeadingStyled>}
        <Grid container spacing={0} style={{ width: "100%" }}>
          <Grid item xs={12} md={6}>
            <TextFieldStyled
              fullWidth
              required
              name='full_name'
              label="Full Name"
              value={profileFormData.full_name}
              onChange={handleOnFieldChange}
              placeholder="Enter your full name"
              error={!!profileError.full_name}
              helperText={profileError.full_name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextFieldStyled
              fullWidth
              name='phone'
              label="Phone Number"
              value={profileFormData.phone}
              onChange={handleOnFieldChange}
              placeholder="Enter your phone number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <EmailFieldStyled
              fullWidth
              required
              name='email'
              label="Email"
              value={profileFormData.email}
              onChange={handleOnFieldChange}
              placeholder="Enter your email address"
              error={!!profileError.email}
              helperText={profileError.email}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextFieldStyled
              fullWidth
              name='website'
              label="Website"
              value={profileFormData.website}
              onChange={handleOnFieldChange}
              placeholder="Enter your website url."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextFieldStyled
              fullWidth
              name='gender'
              label="Gender"
              value={profileFormData.gender}
              onChange={handleOnFieldChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextFieldStyled
              fullWidth
              name='dob'
              label="Date of birth"
              value={profileFormData.dob}
              onChange={handleOnFieldChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldStyled
              fullWidth
              name='about'
              type="textarea"
              label="Bio/About"
              placeholder="Your Bio here"
              value={profileFormData.about}
              onChange={handleOnFieldChange}
            />
          </Grid>
        </Grid>

        <ButtonStyled
          fullWidth={false}
          type="submit"
          disabled={!isValidForm}
        >
          Update
        </ButtonStyled>
      </form>
    </>
  )
}

export default ProfileForm