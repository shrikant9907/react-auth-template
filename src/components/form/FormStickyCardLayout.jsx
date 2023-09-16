import React from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const FormLayout = styled(Box)`
  position: fixed;
  top: 50%;  
  left: 50%;  
  transform: translate(-50%, -50%); 
  background: #fff;
  margin-bottom: 20px;
  font-size: 15px;
  padding: 20px 30px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  border-radius: 16px;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
  -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
  -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
  -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
  -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
`;

const FormStickyCardLayout = ({ children }) => {

  return (
    <FormLayout>
      {children}
    </FormLayout>
  )
}

export default FormStickyCardLayout