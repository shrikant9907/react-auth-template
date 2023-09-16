import React from 'react'
import FormStickyCardLayout from '../components/form/FormStickyCardLayout';
import VerifyOtpForm from '../components/form/VerifyOtpForm';

const VerifyOtpPage = () => {
  return (
    <>
      <FormStickyCardLayout>
        <VerifyOtpForm
          heading="Verify OTP"
        />
      </FormStickyCardLayout>
    </>
  )
}

export default VerifyOtpPage;