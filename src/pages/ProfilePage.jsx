import React from 'react'
import ProfileForm from '../components/form/ProfileForm';
import FormFullHeightLayout from '../components/form/FormFullHeightLayout';

const ProfilePage = () => {
  return (
    <>
      <FormFullHeightLayout>
        <ProfileForm
          heading="Profile Details"
        />
      </FormFullHeightLayout>
    </>
  )
}

export default ProfilePage;