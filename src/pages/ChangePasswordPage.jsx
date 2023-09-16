import React from 'react'
import FormStickyCardLayout from '../components/form/FormStickyCardLayout';
import ChangePasswordForm from '../components/form/ChangePasswordForm';

const ChangePasswordPage = () => {
  return (
    <>
      <FormStickyCardLayout>
        <ChangePasswordForm
          heading="Change Your Password"
        />
      </FormStickyCardLayout>
    </>
  )
}

export default ChangePasswordPage;