import React, { useState } from 'react'
import ButtonStyled from './ButtonStyled';
import TextFieldStyled from './TextFieldStyled';
import FormHeadingStyled from './FormHeadingStyled';
import GoBackLinkStyled from './GoBackLinkStyled';
import { otpSchema } from '../../utils/utility';

const VerifyOtpForm = ({ heading }) => {

  const [otpNumber, setOtpNumber] = useState("");
  const [otpError, setOtpError] = useState("");

  const validateOtp = async (value) => {
    let errorMessage = "";
    try {
      await otpSchema.validate(value);
    } catch (error) {
      errorMessage = error.message
    }
    setOtpError(errorMessage);
  };

  const handleOnOtpChange = (e) => {
    const { value } = e.target;
    const trimmedValue = value.replace(/\D/g, "");
    setOtpNumber(trimmedValue);
    validateOtp(trimmedValue);
  };

  const handleOnLoginSubmit = (e) => {
    e.preventDefault();

    console.log("Otp", otpNumber);

    return false;
  }

  const isValidOtp = !otpError && otpNumber;

  return (
    <form
      autoComplete='off'
      onSubmit={handleOnLoginSubmit}
    >
      {heading && <FormHeadingStyled variant='h1'>{heading ?? "Verify OTP"}</FormHeadingStyled>}

      <TextFieldStyled
        fullWidth
        required
        name="otp"
        label="OTP"
        value={otpNumber}
        onChange={handleOnOtpChange}
        placeholder="Enter your 5 digit OTP here"
        inputProps={{
          maxLength: 5,
        }}
        error={!!otpError}
        helperText={otpError}
      />

      <ButtonStyled
        type="submit"
        disabled={!isValidOtp}
      >
        Verify
      </ButtonStyled>

      <GoBackLinkStyled />

    </form>
  )
}

export default VerifyOtpForm