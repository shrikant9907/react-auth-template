import React from 'react'
import LoginForm from '../components/form/LoginForm'
import FormStickyCardLayout from '../components/form/FormStickyCardLayout';

const LoginPage = () => {
  return (
    <>
      <FormStickyCardLayout>
        <LoginForm
          heading="Welcome"
          hideLogo={false}
        />
      </FormStickyCardLayout>
    </>
  )
}

export default LoginPage;