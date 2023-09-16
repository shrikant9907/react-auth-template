import React from 'react'
import FormStickyCardLayout from '../components/form/FormStickyCardLayout';
import ForgotPasswordForm from '../components/form/ForgotPasswordForm';

const ForgotPasswordPage = () => {
  return (
    <>
      <FormStickyCardLayout>
        <ForgotPasswordForm
          heading="Forgot password"
        />
      </FormStickyCardLayout>
    </>
  )
}

export default ForgotPasswordPage;