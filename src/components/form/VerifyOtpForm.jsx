import React, { useState } from 'react'
import ButtonStyled from './ButtonStyled';
import TextFieldStyled from './TextFieldStyled';
import FormHeadingStyled from './FormHeadingStyled';
import GoBackLinkStyled from './GoBackLinkStyled';

const VerifyOtpForm = ({ heading }) => {

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
      {heading && <FormHeadingStyled variant='h1'>{heading ?? "Verify OTP"}</FormHeadingStyled>}

      <TextFieldStyled
        fullWidth
        required
        name="verify_otp"
        label="OTP"
        placeholder="Enter OTP here"
        error={false}
      />

      <ButtonStyled type="submit">
        Verify
      </ButtonStyled>

      <GoBackLinkStyled />

    </form>
  )
}

export default VerifyOtpForm