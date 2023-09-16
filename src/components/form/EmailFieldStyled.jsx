
import React from 'react';
import TextFieldStyled from './TextFieldStyled';

const EmailFieldStyled = (props) => {
  return (
    <>
      <TextFieldStyled
        {...props}
        fullWidth
        required
        type="email"
      />
    </>
  )
}

export default EmailFieldStyled;