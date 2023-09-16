import React from 'react'
import FormStickyCardLayout from '../components/form/FormStickyCardLayout';
import SignupForm from '../components/form/SignupForm';

const SignupPage = () => {
  return (
    <>
      <FormStickyCardLayout>
        <SignupForm
          heading="Registration Form"
        />
      </FormStickyCardLayout>
    </>
  )
}

export default SignupPage;